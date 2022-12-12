import React from 'react';
import { ImageGalleryItem, ImageGalleryItemImage} from './GalleryItem.styled';
// import PropTypes from 'prop-types';


export function ImgGalleryItem({onImgClick, shereSrcForModal,photo:{webformatURL, largeImageURL,tags,} }) {
 
  return (
   <ImageGalleryItem  > 
   <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={() => {
        onImgClick();
        shereSrcForModal(largeImageURL, tags) 
        
      }}/>
   </ImageGalleryItem>
  );
}
