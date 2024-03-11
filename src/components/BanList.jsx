import React from 'react';

const BanList = ({ bannedAttributes }) => {
  const handleUnban = (attribute) => {
    // Implement unbanning logic if needed
  };

  return (
    <div className="ban-list">
      <h2>Ban List</h2>
      {bannedAttributes.length === 0 ? (
        <p>No banned attributes</p>
      ) : (
        <ul>
          {bannedAttributes.map((attribute, index) => (
            <li key={index} onClick={() => handleUnban(attribute)}>
              {attribute}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BanList;
