


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [searchTerm]);

  const filterCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteCharacter = id => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: `DELETE`
    }) .then(() => {
      setCharacters(characters.filter(characters => characters.id !==id));
    });
  };

  return (
    <div className=''>
      <div>
        <h1 className='text-center font-bold text-red-500 text-xl'>List Of Characters</h1>
        <input
          type="text"
          placeholder='Search...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 mt-5 " />



        {filterCharacters.map((character) => (
          <div key={character.id}>
            <Link to={`/characters/${character.id}`}></Link>
          </div>
        ))}

      </div>

      <div className='grid grid-cols-3 gap-4 mx-10 mt-8 mb-8'>
        {filterCharacters.map((character) => (
          <div key={character.id}>
            <h2 className='text-xl font-bold'>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p className='font-medium text-black-300'>{character.status}</p>
            <p>{character.species}</p>
            <Link to={`/characters/${character.id}`} state={character}>
              <button className="font-serif text-center bg-red-500 mt-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg">View Character</button>
            </Link>

            <button onClick={() => deleteCharacter(character.id)}  className='bg-red-600 rounded-lg text-white mt-2 ml-10'>
                            DELETE
            </button>           
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;




