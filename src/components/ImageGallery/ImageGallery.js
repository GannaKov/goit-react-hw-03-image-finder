import React , { Component }from 'react';
//  import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/GalleryItem/GalleryItem'; 


export class ImageGallery extends Component{
  state={photos:[],}

  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';
componentDidUpdate(prevProps, prevState) {
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
  const { photos } = this.state;
  let page=1
  if (prevWord !== nextWord) {let page=1}
  fetch(`${this.BASEURL}?key=${this.KEY}&q=${nextWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
  .then(response=>response.json())
   .then(photos=>this.setState({photos:photos.hits}))
}
render(){const {photos}=this.state
return (
<ul className="ImageGallery">
{photos.map(photo => (
  <ImageGalleryItem key={photo.id} photo={photo}>
  </ImageGalleryItem>
))}
</ul>)
}

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