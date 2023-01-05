import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/operations';
import {
  ModalWraper,
  Modal,
  ModalTitle,
  ModalInput,
  ModalBtn,
} from './ContactModal.styled';

export const ContactModal = ({id}) => {
  const contacts = useSelector(state => state.contacts.items);
  const currentContact = contacts.find(
    contact => contact.id === id
    );
    console.log(currentContact);
  const [name, setName] = useState(`${currentContact.name}`);
  const [phone, setPhone] = useState(`${currentContact.number}`);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setPhone(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
      event.preventDefault();
      if (contacts.find(contact => contact.name === name)) {
        return alert(`${name} is already in contacts!`);
      }
    dispatch(addContact({ name, number: phone }));
    setName('');
    setPhone('');
  };
  return (
    <ModalWraper>
      <Modal onSubmit={handleSubmit}>
        <ModalTitle>
          Name
          <ModalInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </ModalTitle>
        <ModalTitle>
          Number
          <ModalInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={phone}
          />
        </ModalTitle>
        <ModalBtn type="submit">Edit contact</ModalBtn>
      </Modal>
    </ModalWraper>
  );
};
