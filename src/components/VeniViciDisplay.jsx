import React from 'react';

const VeniViciDisplay = ({ data, onBan }) => {
  const { url, breeds } = data;

  const handleAttributeClick = (attribute) => {
    onBan(attribute);
  };

  return (
    <div className="VeniViciDisplay">
      {url && (
        <img src={url} alt="Dog" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      )}
      {breeds && breeds.length > 0 && (
        <div>
          <p>
            <span
              className="clickable"
              onClick={() => handleAttributeClick(`Breed: ${breeds[0].name || 'Unknown'}`)}
            >
              Breed: {breeds[0].name || 'Unknown'}
            </span>
          </p>
          <p>
            <span
              className="clickable"
              onClick={() => handleAttributeClick(`Weight: ${breeds[0]?.weight?.metric || 'Unknown'}`)}
            >
              Weight: {breeds[0]?.weight?.metric || 'Unknown'}
            </span>
          </p>
          <p>
            <span
              className="clickable"
              onClick={() => handleAttributeClick(`Height: ${breeds[0]?.height?.metric || 'Unknown'}`)}
            >
              Height: {breeds[0]?.height?.metric || 'Unknown'}
            </span>
          </p>
        </div>
      )}
      <button onClick={() => onBan(`Breed: ${breeds[0]?.name || 'Unknown'}`)}>Ban this</button>
    </div>
  );
};

export default VeniViciDisplay;
