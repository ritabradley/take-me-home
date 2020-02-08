import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, updateLocation] = useState('Las Vegas, NV')
    const [animal, updateAnimal] = useState('')
    const [breed, updateBreed] = useState('')
    const [breeds, updateBreeds] = useState([])
    return (
        <div className='search-params'>
            <form>
                <label htmlFor='location'>
                    <label htmlFor='animal'>
                        Animal
                        <select
                            value={animal}
                            id='animal'
                            onChange={e => updateAnimal(e.target.value)}
                            onBlur={e => updateAnimal(e.target.value)}
                        >
                            <option />
                            {ANIMALS.map(animal => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor='breed'>
                        Breed
                        <select
                            disabled={!breeds.length}
                            id='breed'
                            value={breed}
                            onChange={e => updateBreed(e.target.value)}
                            onBlur={e => updateBreed(e.target.value)}
                        >
                            <option />
                            {breeds.map(breed => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>
                    Location
                    <input
                        id='location'
                        value={location}
                        placeholder='Location'
                        onChange={e => updateLocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
