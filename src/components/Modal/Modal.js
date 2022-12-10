import React , {Component} from 'react';
//  import PropTypes from 'prop-types';

export class Modal extends Component {state={}
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown=(evt)=>{ if (evt.code === "Escape"){
    this.props.onImgClick()}}
 
render(){
    const {src,alt,onImgClick}=this.props;
    return(
    <div className="Overlay" onClick={() => {
        onImgClick();    
      }}
      >
<div className="Modal">
  <img src={src} alt={alt} /> 
</div>
</div>
)}}



// export function Modal ({src, alt}){console.log("modal",src, alt)
//     return(<div className="Overlay">
//     <div className="Modal">
//       <img src={src} alt={alt} /> 
//     </div>
//   </div>)
// }
