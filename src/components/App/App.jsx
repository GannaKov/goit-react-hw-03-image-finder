import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

// import { fetchPhotos } from 'components/FetchApi';



export class App extends Component {
  state = { 
    searchWord:"",
  page:1,
  showModal:false,
  largeImgData: { src: '', alt: '' },
    
  };

toggleModal=()=>{this.setState(({showModal})=>({showModal:!showModal}))}

  handleFormSubmit = searchWord => {
    this.setState({ searchWord,page:1 });
  };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
 
  loadMore = () => {
    this.setState(prev => ({
      page: (prev.page += 1),
    }));
  };
 
  shereSrcForModal=(srcLarge,altLarge)=>{ ;
  this.setState({largeImgData:{src:srcLarge,alt:altLarge}})
 
}

  render() { const {  largeImgData,searchWord,page,showModal} = this.state;
 
  return (<div><Searchbar onSubm={this.handleFormSubmit}/>
  <ImageGallery  searchWord={searchWord} page={page} onImgClick={this.toggleModal} shereSrcForModal={this.shereSrcForModal}/>
  <LoadMoreBtn  onLoadMoreClick={this.loadMore} >Load More</LoadMoreBtn>
  {showModal &&(<Modal src={largeImgData.src} alt={largeImgData.alt}/>)}
  </div>)}
   
  }   
       
  // onLoadMoreClick={this.loadMore}   
// 30040272-179178153c29e3da83ceec1ea
// const BASEURL = 'https://pixabay.com/api/';
// const keyApiPix = '30040272-179178153c29e3da83ceec1ea';
// export default async function fetchPhotos(keyWord, perPage, page) {
//   const response = await axios.get(
//     `${BASEURL}?key=${keyApiPix}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
//   );

//   return response;
// }
// onSubm={this.addContact}
// handleChange={this.handleChange}
// handleChange={this.handleChange}>
// <GlobalStyle />