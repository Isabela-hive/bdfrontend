import React, { useEffect, useState } from 'react';

const Tours = () => {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend API or perform an AJAX request here
    // Update the tourData state with the fetched data
    // Example code to fetch data using the Fetch API:
    fetch('/api/tours')
      .then((response) => response.json())
      .then((data) => setTourData(data))
      .catch((error) => console.error(error));
  }, []);

  if (tourData.length === 0) {
    return <div>Loading...</div>;
  }

  const randomTour = tourData[Math.floor(Math.random() * tourData.length)];

  return (
    <div>
      <h1>Random Tour Image</h1>
      <img src={randomTour.image} alt="Tour" />
      <p>Name: {randomTour.name}</p>
      <p>Destination: {randomTour.destination}</p>
    </div>
  );
};

export default Tours;
