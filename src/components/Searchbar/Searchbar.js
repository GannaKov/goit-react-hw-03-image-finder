import React, { Component } from 'react';
//  import PropTypes from 'prop-types';

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
      this.reset();
    };

    reset = () => {
      this.setState({searchWord:"" });
    };
    render() {
    //   const { name, number } = this.state;
      return ( 
      <header className="Searchbar"> 
      <form className="SearchForm" onSubmit={this.handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
  
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchWord}
        onChange={this.handleChange}/>
    </form>
    </header>      
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