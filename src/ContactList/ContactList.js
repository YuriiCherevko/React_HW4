import React, { Component } from "react";
import "./ContactList.css";
import ContactListItem from "./ContactListItem";
import ContactListForm from "./ContactListForm";

export default class ContactList extends Component {
  state = {
    contacts: [
      {
        id: 1,
        age: 33,
        name: "Leanne",
        surname: "Graham",
        phone: "1-770-736-8031 x56442",
      },
      {
        id: 2,
        age: 33,
        name: "Ervin",
        surname: "Howell",
        phone: "010-692-6593 x09125",
      },
      {
        id: 3,
        age: 33,
        name: "Clementine",
        surname: "Bauch",
        phone: "1-463-123-4447",
      },
      {
        id: 4,
        age: 33,
        name: "Patricia",
        surname: "Lebsack",
        phone: "493-170-9623 x156",
      },
      {
        id: 5,
        age: 33,
        name: "Chelsey",
        surname: "Dietrich",
        phone: "(254)954-1289",
      },
      {
        id: 6,
        age: 33,
        name: "Dennis",
        surname: "Schulist",
        phone: "1-477-935-8478 x6430",
      },
      {
        id: 7,
        age: 33,
        name: "Kurtis",
        surname: "Weissnat",
        phone: "210.067.6132",
      },
      {
        id: 8,
        age: 33,
        name: "Nicholas",
        surname: "Runolfsdottir V",
        phone: "586.493.6943 x140",
      },
      {
        id: 9,
        age: 33,
        name: "Glenna",
        surname: "Reichert",
        phone: "(775)976-6794 x41206",
      },
      {
        id: 10,
        age: 33,
        name: "Clementina",
        surname: "DuBuque",
        phone: "024-648-3804",
      },
    ],
    contactItem: { name: "123", surname: "", id: "" },
  };

  onFormSave = (contactItem) => {
    contactItem.id = Date.now();
    this.setState({
      contacts: [...this.state.contacts, contactItem],
      contactItem: { name: "", surname: "" },
    });
  };

  onFormDelete = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== contact.id),
    });
  };

  changeContact = (contact) => {
    this.setState({
      contactItem: contact,
    });
  };

  onFormInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      contactItem: {
        ...this.state.contactItem,
        [name]: value,
      },
    });
  };
  onAddNewContact = () => {
    this.setState({
      contactItem: { name: "", surname: "" },
    });
  };
  render() {
    return (
      <>
        <table className="contacts-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <ContactListItem
                contact={contact}
                key={contact.id}
                onChange={this.changeContact}
              ></ContactListItem>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <button onClick={this.onAddNewContact}>Add new Contact</button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="contact-form">
          <ContactListForm
            onSave={this.onFormSave}
            contactItem={this.state.contactItem}
            onChange={this.onFormInputChange}
            onDelete={this.onFormDelete}
          ></ContactListForm>
        </div>
      </>
    );
  }
}
