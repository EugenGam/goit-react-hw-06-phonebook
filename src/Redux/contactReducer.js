import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';

const checkContact = (contacts, name) => {
  let check = true;
  if (contacts.length > 0) {
    contacts.forEach(el => {
      if (el.name === name) {
        alert('You already have this contact');
        check = false;
      } else check = true;
    });
  }
  return check;
};

const contactReducer = createReducer([], {
  [contactActions.contactAdd.type]: (state, action) => {
    if (
      action.payload.contact.name !== '' &&
      checkContact(state, action.payload.contact.name)
    )
      return [...state, action.payload.contact];
  },
  [contactActions.contactDelete.type]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

export default contactReducer;
