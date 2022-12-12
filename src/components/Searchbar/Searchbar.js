import React, { Component } from 'react';
//  import PropTypes from 'prop-types';
import { SearchbarHeader , SearchForm,SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchBar.styled';

export class Searchbar extends Component {
    state = {
      searchWord: "",
    };
    
    handleChange = evt => {
      this.setState({ searchWord:evt.currentTarget.value.toLowerCase()});
    };
   
    handleSubmit = evt => {
      evt.preventDefault();
      if (this.state.searchWord.trim() === '') {
        alert('Введите ....');
        return;
      }
      
      this.props.onSubm(this.state.searchWord);
      // this.reset();
    };

    // reset = () => {
    //   this.setState({searchWord:"" });
    // };

    render() {
    //   const { name, number } = this.state;
      return ( 
      <SearchbarHeader> 
      <SearchForm  onSubmit={this.handleSubmit}>
      <SearchFormButton type="submit" >
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
  
      <SearchFormInput 
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchWord}
        onChange={this.handleChange}/>
    </SearchForm>
    </SearchbarHeader>      
      );
    }
  }

//   <Form onSubmit={this.handleSubmit}>
//           <FormLabel>
//             Name
//             <FormInput
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//               onChange={this.handleChange}
//             />
//           </FormLabel>
//           <FormLabel>
//             Number
//             <FormInput
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//               onChange={this.handleChange}
//             />
//           </FormLabel>
//           <ModalSubmitBtn type="submit">Add Conract</ModalSubmitBtn>
//         </Form>