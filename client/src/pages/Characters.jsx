import React from 'react';
import CharacterCard from '../components/CharacterCard.jsx';
import { silksongData } from '../data/silksongData';
// import './Characters.css';

const Characters = () => {

	//faire request sql and map it
	//car actuelement on map le json et c'est null
  return (
    <div className="characters-page">
      <h2>👥 Personnages de Silksong</h2>
      <div className="characters-grid">
        {silksongData.characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;