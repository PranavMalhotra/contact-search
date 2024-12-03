import React, { useState } from "react";
import SearchFilters from "./SearchFilters";
import ResultsTable from "./ResultsTable";
import SelectedContact from "./SelectedContact";
import contacts from "./contact.json";

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (filters) => {
    const results = contacts.filter((contact) => {
      return (
        (!filters.firstName || (contact.firstName && contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase()))) &&
        (!filters.lastName || (contact.lastName && contact.lastName.toLowerCase().includes(filters.lastName.toLowerCase()))) &&
        (!filters.dob || contact.dob === filters.dob) &&
          (!filters.street || (contact.street?.toLowerCase().includes(filters.street.toLowerCase()))) &&
          (!filters.city || (contact.city?.toLowerCase().includes(filters.city.toLowerCase()))) &&
          (!filters.state || (contact.state?.toLowerCase().includes(filters.state.toLowerCase()))) &&
          (!filters.zip || (contact.zip?.toLowerCase().includes(filters.zip.toLowerCase())))&&
        (!filters.email || (contact.email && contact.email.toLowerCase().includes(filters.email.toLowerCase()))) &&
        (!filters.phone || (contact.phone && contact.phone.includes(filters.phone)))
      );
    });
  console.log(results);
    setFilteredContacts(results);
  };

  return (
    <div>
      <SearchFilters onSearch={handleSearch} />
      <ResultsTable contacts={filteredContacts} onSelectContact={setSelectedContact} />
      {selectedContact && <SelectedContact contact={selectedContact} />}
    </div>
  );
};

export default App;
