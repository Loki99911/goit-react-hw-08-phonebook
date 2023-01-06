import { ContactItem } from '../ContactItem/ContactItem';
import { ListBlock } from './ContactList.styled';
import { deleteContact } from '../../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContact = () => {
    if (contacts.length !== 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };
 
  const apruveDelete = ({ id, name }) => {
    const apruve = window.confirm(
      `You want to delete the contact "${name}"! Are you sure?`
    );
    if (apruve) {
      dispatch(deleteContact(id));
    }
  };
  
  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ListBlock>
          {filterContact().map(contact => {
            const { id } = contact;

            return (
              <ContactItem
                key={id}
                contactItem={contact}
                onClick={() => apruveDelete(contact)}
              />
            );
          })}
        </ListBlock>
      )}
    </>
  );
};
