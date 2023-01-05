import PropTypes from 'prop-types';
import { ItemBlock, ItemBtnEdit, ItemBtnDelete } from './ContactItem.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {ContactModal} from "../ContactModal/ContactModal"

export const ContactItem = ({ contactItem, onClick }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  // const modal = useSelector(state => state.contacts.isLoading);
  const [modal,setModal] = useState(false)
  return (
    <ItemBlock>
      {contactItem.name}: {contactItem.number}
      <div>
        <ItemBtnEdit
          type="button"
          disabled={isLoading}
          onClick={() => {
            console.log(contactItem.id);
            setModal(!modal);
          }}
        >
          Edit
        </ItemBtnEdit>
        <ItemBtnDelete type="button" disabled={isLoading} onClick={onClick}>
          Delete
        </ItemBtnDelete>
        {modal && (
          <ContactModal id={contactItem.id}/>
        )}
      </div>
    </ItemBlock>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
