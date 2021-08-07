import { useState } from "react";
import { FilterContainer } from "./styles";

import { MdSearch } from 'react-icons/md'
 
export function Filter({ getCountry }) {
    const [ input, setInput ] = useState('')

    const handleInputSearch = (event) => {
        event.preventDefault()
        getCountry(input)
        setInput('')
    }

    return (
        <FilterContainer>
            <MdSearch />
            <form onSubmit={ e => handleInputSearch(e)}>
                <input type="text" onChange={e => setInput(e.target.value)}  value={input} placeholder="Search for a country..." />
            </form>
        </FilterContainer>
    )
}