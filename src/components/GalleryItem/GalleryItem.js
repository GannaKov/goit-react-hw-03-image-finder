import React, {Component} from 'react';

// import PropTypes from 'prop-types';
// export

export function ImageGalleryItem({onImgClick, photo:{webformatURL, largeImageURL,tags,} }) {
  return (
   <li className="ImageGalleryItem" > 
   <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={() => {
        onImgClick();
        ;
      }}/>
   </li>
  );
}
// handleModal=evt=>{console.log(evt)
//   //this.props.ShowMod
// }
// ImageGalleryItem.propTypes={
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({  
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };