import React from 'react';
import { Link } from 'react-router-dom';
import './sports.css';

const SportsBlog = () => {
  const sportsData = [
    {
      id: 1,
      title: 'Football',
      image: 'Static/wrestling.jpg',
    },
    {
      id: 2,
      title: 'Basketball',
      image: 'Static/wrestling.jpg',
    },
    {
      id: 3,
      title: 'Basketball',
      image: 'Static/wrestling.jpg',
    },
    {
      id: 4,
      title: 'Basketball',
      image: 'Static/wrestling.jpg',
    },
    // Add more sports data here...
  ];

  return (
    <div className="sports-blog">
      <h2>Sports</h2>
      <div className="sports-list">
        {sportsData.map((sport) => (
          <div key={sport.id} className="game-card">
            <Link to={`/history/sports/${sport.id}`}>
              <img src={sport.image} alt={sport.title} />
              <h3>{sport.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsBlog;
