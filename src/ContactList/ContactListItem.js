import React, { Component } from "react";

export default class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <tr onClick={this.props.onChange.bind(null, contact)}>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
      </tr>
    );
  }
}
