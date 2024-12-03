import React, { useState } from "react";
import "./SearchFilters.css";

const SearchFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const states = [
    "Select State",
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="search-filters-container">
      <h2>Search Contacts</h2>
      <div className="filters">
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="dob"
          type="date"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="street"
          placeholder="Street Address"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="input-field"
        />
        <select
          name="state"
          onChange={handleChange}
          className="input-field dropdown"
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <input
          name="zip"
          placeholder="ZIP Code"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchFilters;
