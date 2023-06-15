import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './GamePage.css';

const gameData = {
  1: {
    title: 'Football',
    image: 'static/wrestling.jpg',
    content: 'This is a detailed page about football.',
  },
  2: {
    title: 'Basketball',
    image: 'static/wrestling.jpg',
    content: 'This is a detailed page about basketball.',
  },
  // Add more game data here...
};

const GamePage = () => {
  const { id } = useParams();
  const game = gameData[id];

  if (!game) {
    return <div>Game not found.</div>;
  }

  return (
    <div className="game-page">
      <h2>{game.title}</h2>

      <img src={game.image} alt={game.title} />
      <p>{game.content}</p>
      <Link to="/history">Go Back</Link>
    </div>
  );
};

export default GamePage;
