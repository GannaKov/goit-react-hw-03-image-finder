import React  from 'react';
//  import PropTypes from 'prop-types';

export function Modal ({src, alt}){console.log("modal",src, alt)
    return(<div className="Overlay">
    <div className="Modal">
      <img src={src} alt={alt} /> 
    </div>
  </div>)
}
