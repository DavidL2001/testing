import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DogInfoPage.css';

const DogInfo = () => {
  const [dogOwner, setDogOwner] = useState(null);
  const { dogOwnerId } = useParams();

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126/latest')
      .then(res => res.json())
      .then(data => {
        const owner = data.record.find(owner => owner.id === dogOwnerId);
        setDogOwner(owner);
      });
  }, [dogOwnerId]);

  if (!dogOwner) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{dogOwner.name}</h1>
      <p>Ras: {dogOwner.dogBreed}</p>
      <p>Ålder: {dogOwner.dogAge}</p>
    </div>
  );
}

export default DogInfo;
