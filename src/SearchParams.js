import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
    const [location, updateLocation] = useState('Las Vegas, NV')
    const [breeds, updateBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
    const [breed, BreedDropdown] = useDropdown('Breed', '', breeds)
    return (
        <div className='search-params'>
            <form>
                <label htmlFor='location'>
                    <AnimalDropdown />
                    <BreedDropdown />
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
