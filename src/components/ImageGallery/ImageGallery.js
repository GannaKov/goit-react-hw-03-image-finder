import React , { Component }from 'react';
//  import PropTypes from 'prop-types';
import { LoadMoreBtn } from 'components/Button/Button';
import { ImgGalleryItem } from 'components/GalleryItem/GalleryItem'; 
import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
import { FetchFotos } from 'components/FetchFotos/FetchFotos';
import { ImageGallery,Gallery } from './ImageGallery.styled';
// import { autoscroll } from 'components/App/Autoscroll';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImgGallery extends Component{
  state={page:1,
    photos:[],
    status: Status.IDLE,
    error: null,
  totalHits:0,
  perPage:12}
 
  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';

componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate")
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
 const {page}=this.state;
 console.log("componentDidUpdate", page)
 if(prevWord !== nextWord){ console.log ("in if",prevWord,nextWord )
  this.setState({ 
    page:1,
  })}
 
  if ( prevWord !== nextWord || prevState.page!==page) {console.log ("in 2 if",prevState.page,page )

    this.setState({ status: Status.PENDING })


    FetchFotos(this.BASEURL,this.KEY,nextWord,page)
   .then(photos=>{console.log("in fetch componentDidUpdate")
    if(this.state.page === 1){ console.log(photos)
      this.setState({ photos: photos.hits,
      status: Status.RESOLVED,
      totalHits: photos.totalHits })
     }
    else{console.log("in else fetch componentDidUpdate")
      this.setState({
      photos:[...prevState.photos,...photos.hits],  
      status: Status.RESOLVED,
    totalHits: photos.totalHits})
    
   }
    
    }
    )
   .catch(error => this.setState({ error, status: Status.REJECTED }))

}
// if(this.state.page !== 1){;
//   autoscroll()}
  
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
  // const totalPage = Math.ceil(totalHits / perPage);
const { onImgClick, shereSrcForModal} = this.props;
if(status==="pending"){return <Loader/>}
if (status === 'rejected') {
  return <ErrorView message={error.message} />;
}
if (status === 'resolved') {
  return  (<>
  {photos &&
  (<Gallery>
    <ImageGallery  >
  {photos.map(photo => (
    <ImgGalleryItem  
    key={photo.id} photo={photo} onImgClick={onImgClick} shereSrcForModal={shereSrcForModal}>
    </ImgGalleryItem>
  ))}
  </ImageGallery></Gallery>)}
  
  {photos.length>0  && (<LoadMoreBtn  onLoadMoreClick={this.onLoadMoreClick} >Load More</LoadMoreBtn>)}
  
  </>
  );
}}

}
// const {photos, status,error,page,totalHits,perPage}=this.state;
//   const totalPage = Math.ceil(totalHits / perPage);
// page<=totalPage?