import React , { Component }from 'react';
//  import PropTypes from 'prop-types';
import { LoadMoreBtn } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/GalleryItem/GalleryItem'; 
import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
import { FetchFotos } from 'components/FetchFotos/FetchFotos';
import { autoscroll } from 'components/App/Autoscroll';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component{
  state={page:1,
    photos:[],
    status: Status.IDLE,
    error: null,
  totalHits:0,}
 
  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';

componentDidUpdate(prevProps, prevState) {
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
 const {page}=this.state;

 if(prevWord !== nextWord){ console.log("ku")
  this.setState({ 
    page:1,
  })}
 
  if (prevWord !== nextWord || prevState.page!==page) {

    this.setState({ status: Status.PENDING })


    FetchFotos(this.BASEURL,this.KEY,nextWord,page)
   .then(photos=>{
    if(this.state.page === 1){ this.setState({ photos: photos.hits,
      status: Status.RESOLVED,
      totalHits: photos.totalHits })
     }
    else{this.setState({
      photos:[...prevState.photos,...photos.hits],  
      status: Status.RESOLVED,
    totalHits: photos.totalHits})
   }
    
    }
    )
   .catch(error => this.setState({ error, status: Status.REJECTED }))

}
// autoscroll()
}

onLoadMoreClick=()=>{
  this.setState(prev => ({
    page: (prev.page += 1),
  }));
}

// loadMore = () => {
//   this.setState(prev => ({
//     page: (prev.page += 1),
//   }));
// };

render(){  
  const {photos, status,error}=this.state;
 
const { onImgClick, shereSrcForModal} = this.props;
if(status==="pending"){return <Loader/>}
if (status === 'rejected') {
  return <ErrorView message={error.message} />;
}
if (status === 'resolved') {
  return  (<>
  <div className='gallery'>
    <ul className="ImageGallery" >
  {photos.map(photo => (
    <ImageGalleryItem  
    key={photo.id} photo={photo} onImgClick={onImgClick} shereSrcForModal={shereSrcForModal}>
    </ImageGalleryItem>
  ))}
  </ul></div>
  
  {photos.length>0 &&(<LoadMoreBtn  onLoadMoreClick={this.onLoadMoreClick} >Load More</LoadMoreBtn>)}
  
  </>
  );
}}

}
