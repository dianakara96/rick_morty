
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?q=${searchTerm}`)
.then((response) => response.json())
.then((data) => setCharacters(data.results));
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {characters.map((character) => (
        <div key={character.id}>
         <Link to={`/characters/${character.id}`}></Link>

        
    </div>
      )
      )}
    </div>
  );
}
  
