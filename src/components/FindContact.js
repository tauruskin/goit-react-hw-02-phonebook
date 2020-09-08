import React from 'react';
import PropTypes from 'prop-types';

const FindContact = ({ filtered, filterValue, deleteContact }) => {
  return (
    <>
      <h3>Contacts</h3>
      <span>Find contacts by name</span>
      <br></br>
      <input type="text" onChange={filterValue}></input>
      <ul>
        {filtered.map(item => (
          <li key={item.id}>
            {item.name} : {item.number}
            <button type="button" id={item.id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FindContact;

FindContact.propTypes = {
  filtered: PropTypes.array.isRequired,
  filterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
