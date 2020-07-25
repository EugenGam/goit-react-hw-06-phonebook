import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../Redux/contactActions';
import Theme from '../Theme';
import './style.scss';

const Contact = ({ onDelete, contacts, filter, theme }) => {
  const filterForm = el => {
    return (
      <li key={el.id} className="contactCard">
        <p>{el.name}: </p>
        <p>{el.number}</p>
        <button
          className="contactCard__btn"
          value={el.id}
          onClick={e => onDelete(e.target.value)}
        >
          Delete
        </button>
      </li>
    );
  };

  const filterContact = (filter, el) => {
    if (filter !== '') {
      if (el.name.toLowerCase().includes(filter.toLowerCase())) {
        return filterForm(el);
      } else {
        return null;
      }
    } else {
      return filterForm(el);
    }
  };

  return (
    <ul
      className="contactList"
      style={{ color: Theme[theme].fontColor, background: Theme[theme].bodybg }}
    >
      {contacts.length > 0 &&
        contacts.map(el => {
          return filterContact(filter, el);
        })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  onDelete: contactActions.contactDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
