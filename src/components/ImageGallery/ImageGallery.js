import React , { Component }from 'react';
//  import PropTypes from 'prop-types';
import { LoadMoreBtn } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/GalleryItem/GalleryItem'; 
import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
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
    error: null,}
 
  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';

componentDidUpdate(prevProps, prevState) {
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
 const {page}=this.state;
  
  if (prevWord !== nextWord||prevState.page!==page) {

    this.setState({ status: Status.PENDING });
  fetch(`${this.BASEURL}?key=${this.KEY}&q=${nextWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
  .then(response=>response.json())
   .then(photos=>{this.setState({
    photos:[...prevState.photos,...photos.hits],
   
    status: Status.RESOLVED  })
    
    }
    )
   .catch(error => this.setState({ error, status: Status.REJECTED }))

}

}

loadMore = () => {
  this.setState(prev => ({
    page: (prev.page += 1),
  }));
};

render(){ 
  const {photos, status,error}=this.state;
 
const { onImgClick, shereSrcForModal} = this.props;
if(status==="pending"){return <Loader/>}
if (status === 'rejected') {
  return <ErrorView message={error.message} />;
}
if (status === 'resolved') {
  return  (<>
  <ul className="ImageGallery" >
  {photos.map(photo => (
    <ImageGalleryItem  
    key={photo.id} photo={photo} onImgClick={onImgClick} shereSrcForModal={shereSrcForModal}>
    </ImageGalleryItem>
  ))}
  </ul>
  {photos.length>0 &&(<LoadMoreBtn  onLoadMoreClick={this.loadMore} >Load More</LoadMoreBtn>)}
  
  </>
     );
}}

}
