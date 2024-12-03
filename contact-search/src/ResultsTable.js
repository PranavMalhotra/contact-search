import React from "react";
import ReactPaginate from "react-paginate";
import "./ResultsTable.css";

const ResultsTable = ({ contacts, onSelectContact }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedContactId, setSelectedContactId] = React.useState(null);
  const itemsPerPage = 2;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentContacts = contacts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleSelection = (contact) => {
    setSelectedContactId(contact.id === selectedContactId ? null : contact.id);
    onSelectContact(contact.id === selectedContactId ? null : contact);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedContactId === contact.id}
                  onChange={() => handleSelection(contact)}
                />
              </td>
              <td>{`${contact.firstName} ${contact.lastName}`}</td>
              <td>{contact.dob}</td>
              <td>{contact.street}</td>
              <td>{contact.city}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={Math.ceil(contacts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default ResultsTable;
