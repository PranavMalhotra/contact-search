import React from "react";
import './SelectedContact.css';

const SelectedContact = ({ contact }) => (
    <div className="selected-contact">
      <h3>Selected Contact</h3>
      <p><strong>Name:</strong> {`${contact.firstName} ${contact.lastName}`}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {`${contact.street}, ${contact.city}, ${contact.state} ${contact.zip}`}</p>
    </div>
  );
  
export default SelectedContact;
