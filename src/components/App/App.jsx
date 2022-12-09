import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';


// import { fetchPhotos } from 'components/FetchApi';
// import axios from 'axios';
// import { ContactsList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Fiter/Filter';


export class App extends Component {
  state = { searchWord:"",
    
  };

//   componentDidUpdate(prevProps, prevState) {
//     const prevWord = prevState.searchWord;
//     const nextWord = this.state.searchWord;
//     const { photos } = this.state;
//     if (prevWord !== nextWord) {let page=1
//       // this.setState({ status: Status.PENDING });
// console.log("Ch",prevWord, nextWord)
// // const BASEURL = 'https://pixabay.com/api/';
// // const keyApiPix = '30040272-179178153c29e3da83ceec1ea';
// fetch(`${BASEURL}?key=${keyApiPix}&q=${nextWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
// .then(response=>response.json())
//  .then(photos=>this.setState({photos:[...photos, ...photos.hits]}))
 
     
//       // fetchPhotos
//       //     .fetchApi(nextName)
//       //     .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//       //     .catch(error => this.setState({ error, status: Status.REJECTED }));
    
//     }
//   }

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
    console.log(searchWord)

  };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
 

 

  render() {
    const {  searchWord} = this.state;
    return (<div><Searchbar onSubm={this.handleFormSubmit}/>
    <ImageGallery  searchWord={searchWord}></ImageGallery>
    </div>

     )}
}     
       
        
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