import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { geoApiOptions, GEO_API_URL } from '../../api'

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null)

  // creating method to load options since async paginate doesn't have a load options method
  // seach for all cities in that prefix, takes in 1 input
  const loadOptions = (inputVal) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputVal}`, geoApiOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  // retrieve search data from asyncpaginate, using setSearch method to update search
  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      className='searchBar'
      placeholder='Search City'
      debounceTimeout={800}
      value={search}
      onChange={handleOnChange}
      // loading options
      loadOptions={loadOptions}
    />
  )
}

export default Search