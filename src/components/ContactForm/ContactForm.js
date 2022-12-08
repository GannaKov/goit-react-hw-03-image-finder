// import React, { Component } from 'react';
// import  {Form,FormInput,ModalSubmitBtn,FormLabel} from "components/ContactForm/ContactForm.styled"

// export class ContactForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { name, number } = this.state;

//     this.props.onSubm(name, number);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormLabel>
//           Name
//           <FormInput
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </FormLabel>
//         <FormLabel>
//           Number
//           <FormInput
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </FormLabel>
//         <ModalSubmitBtn type="submit">Add Conract</ModalSubmitBtn>
//       </Form>
//     );
//   }
// }
