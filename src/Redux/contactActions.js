import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const contactDelete = createAction('contact/delete');

const contactAdd = createAction('contact/add', (name, number) => ({
  payload: {
    contact: { name, number, id: uuidv4() },
  },
}));

export default { contactAdd, contactDelete };
