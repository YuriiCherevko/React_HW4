import React, { Component } from "react";

export default class ContactListForm extends Component {
  onContactFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.props.contactItem);
  };

  onDelete = () => {
    this.props.onDelete(this.props.contactItem);
  };
  render() {
    return (
      <form action="" onSubmit={this.onContactFormSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={this.props.contactItem.name}
            onChange={this.props.onChange}
          ></input>
          <input
            type="text"
            name="surname"
            value={this.props.contactItem.surname}
            onChange={this.props.onChange}
          ></input>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </form>
    );
  }
}
