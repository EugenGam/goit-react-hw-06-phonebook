import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../Redux/contactActions';
import Theme from '../Theme';
import './style.scss';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          color: Theme[this.props.theme].fontColor,
          background: Theme[this.props.theme].bodybg,
        }}
      >
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact} className="contactFormEl">
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <label>Number:</label>
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleNumber}
          />
          <input
            type="submit"
            value="Add contact"
            className="contactFormEl__button"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};
const mapDispatchToProps = {
  onAdd: contactActions.contactAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
