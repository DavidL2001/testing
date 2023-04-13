import React, { useState, useEffect } from 'react';
import './CatalogPage.css';

const CatalogPage = () => {
  const [dogOwners, setDogOwners] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126/latest')
      .then(res => res.json())
      .then(data => setDogOwners(data.record));
  }, []);

  return (
    <div>
      <h1>Katalog</h1>
      <ul>
        {dogOwners.map(dogOwner => (
          <li key={dogOwner.id}>{dogOwner.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;
