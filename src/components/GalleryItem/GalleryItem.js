import React from 'react';
// import PropTypes from 'prop-types';


export function ImageGalleryItem({photo:{webformatURL, largeImageURL,tags}}) {
  return (
   <li className="ImageGalleryItem" > 
   <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
   </li>
  );
}

// ImageGalleryItem.propTypes={
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({  
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };