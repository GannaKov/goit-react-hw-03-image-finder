import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from 'components/Button/Button';

// import { fetchPhotos } from 'components/FetchApi';
// import axios from 'axios';
// import { ContactsList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Fiter/Filter';


export class App extends Component {
  state = { searchWord:"",
  page:1
    
  };



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
 

  render() { const {  searchWord,page} = this.state;
  return (<div><Searchbar onSubm={this.handleFormSubmit}/>
  <ImageGallery  searchWord={searchWord} page={page} ></ImageGallery>
  <LoadMoreBtn  onLoadMoreClick={this.loadMore} >Load More</LoadMoreBtn>
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