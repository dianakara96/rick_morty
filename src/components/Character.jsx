

import { useLocation } from 'react-router-dom';
const Character = () => {
    const { state: character } = useLocation();
    console.log(character);
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>Character Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {character.id}</p>
            <p className='text-gray-700'><strong>Name:</strong> {character.name}</p>
            <p className='text-gray-700'><strong>Status:</strong> {character.status}</p>
            <img src={character.image} alt={character.title} className='w-full' />
        </div>
    );
};
export default Character;