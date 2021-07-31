import { useState } from "react";
import { FilterContainer } from "./styles";

import { MdSearch } from 'react-icons/md'
 
export function Filter() {
    const [ input, setInput ] = useState('')

    const handleInputSearch = (event) => {
        event.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <FilterContainer>
            <MdSearch />
            <form>
                <input type="text" onChange={e => setInput(e.target.value)}  value={input} placeholder="Search for a country..." />
                <button onClick={ e => handleInputSearch(e) }/>
            </form>
        </FilterContainer>
    )
}