import React from 'react';
// import PropTypes from 'prop-types';


export function ImageGalleryItem({onImgClick, shereSrcForModal,photo:{webformatURL, largeImageURL,tags,} }) {
 
  return (
   <li className="ImageGalleryItem" > 
   <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={() => {
        onImgClick();
        shereSrcForModal(largeImageURL, tags) 
        
      }}/>
   </li>
  );
}
