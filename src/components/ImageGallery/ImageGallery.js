import React from 'react';
//  import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/GalleryItem/GalleryItem'; 

export function ImageGallery({photos }) {
  return (
   <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo}>
        </ImageGalleryItem>
      ))}
    </ul>
  );
}
// ImageGallery.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired,
//      })),
//     onDelete: PropTypes.func,
// };