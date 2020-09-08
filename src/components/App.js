import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneForm from './PhoneForm';
import FindContact from './FindContact';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  contactName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  contactNumber = e => {
    this.setState({ number: e.target.value });
  };

  filterValue = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  deleteContact = e => {
    const id = e.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  submitForm = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    if (contacts.find(item => item.name === this.state.name)) {
      alert(`${name} already exist`);
      return;
    }
    const object = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, object],
      filter: '',
      name: '',
      number: '',
    }));
  };

  render() {
    const filtered = this.getFilteredContacts();
    return (
      <>
        <PhoneForm
          submitForm={this.submitForm}
          name={this.state.name}
          contactName={this.contactName}
          number={this.state.number}
          contactNumber={this.contactNumber}
        />
        <FindContact
          filtered={filtered}
          filterValue={this.filterValue}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
