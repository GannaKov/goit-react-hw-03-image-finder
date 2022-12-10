import React , { Component }from 'react';
//  import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/GalleryItem/GalleryItem'; 
import { ErrorView } from 'components/ErrorView/ErrorView';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component{
  state={
    photos:[],
    status: Status.IDLE,
    error: null,}
 
  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';
componentDidUpdate(prevProps, prevState) {
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
 const {page}=this.props;
  
  if (prevWord !== nextWord||prevProps.page!==page) {

    this.setState({ status: Status.PENDING });
  fetch(`${this.BASEURL}?key=${this.KEY}&q=${nextWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
  .then(response=>response.json())
   .then(photos=>this.setState({
    photos:[...prevState.photos,...photos.hits],
    status: Status.RESOLVED  }))
   .catch(error => this.setState({ error, status: Status.REJECTED }))}
}

// onClickPhoto=>{console.log(evt)
//   //this.props.ShowMod
// }
render(){const {photos, status,error}=this.state;
console.log(this.props) 
const { onImgClick } = this.props;
console.log(onImgClick) 
if (status === 'rejected') {
  return <ErrorView message={error.message} />;
}
if (status === 'resolved') {
  return  (
    <ul className="ImageGallery">
    {photos.map(photo => (
      <ImageGalleryItem  key={photo.id} photo={photo} onImgClick={onImgClick}>
      </ImageGalleryItem>
    ))}
    </ul>);
}}

}
// export function ImageGallery({photos }) {
//   return (
//    <ul className="ImageGallery">
//       {photos.map(photo => (
//         <ImageGalleryItem key={photo.id} photo={photo}>
//         </ImageGalleryItem>
//       ))}
//     </ul>
//   );
// }
// ImageGallery.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired,
//      })),
//     onDelete: PropTypes.func,
// };