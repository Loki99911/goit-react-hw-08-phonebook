import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../../redux/operations';
import {
  ModalWraper,
  Modal,
  ModalTitle,
  ModalInput,
  ModalBtn,
} from './ContactModal.styled';

export const ContactModal = ({ id, modalToggle }) => {
  const contacts = useSelector(state => state.contacts.items);
  const currentContact = contacts.find(contact => contact.id === id);
  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name === name && contact.number === number
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(updateContact({id, name, number}));
    setName('');
    setNumber('');
    modalToggle();
  };

  useEffect(() => {
    const hendlePressEsc = event => {
      if (event.code === 'Escape') {
        modalToggle();
      }
    };

    window.addEventListener('keydown', hendlePressEsc);
    return () => {
      window.removeEventListener('keydown', hendlePressEsc);
    };
    // Следующая строка нужна!!! что б вырубить ESLINT!!!!
    // eslint-disable-next-line
  }, []);

  const hendleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      modalToggle();
    }
  };

  return (
    <ModalWraper onClick={hendleClickBackdrop}>
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
            value={number}
          />
        </ModalTitle>
        <ModalBtn type="submit">Edit contact</ModalBtn>
      </Modal>
    </ModalWraper>
  );
};
