import React from 'react';
import { ButtonDelete, List } from './ContactListStyled';
// import { List } from './ContactListStyled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <List key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </List>
      ))}
    </ul>
  );
};
