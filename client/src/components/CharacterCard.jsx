import React from 'react';
// import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-header">
        <span className="character-icon">{character.image}</span>
        <h3>{character.name}</h3>
        <span className="character-title">{character.title}</span>
      </div>
      
      <div className="character-content">
        <p>{character.description}</p>
        
        <div className="character-abilities">
          <h4>Capacités :</h4>
          <ul>
            {character.abilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
        
        <div className="character-role">
          <strong>Rôle :</strong> {character.role}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;