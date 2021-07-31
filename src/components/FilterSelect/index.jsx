import { FilterSelectContainer, OptionListRegion } from "./styles"

import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from "react"

export function Select () {
    const [ showOpitionList, setShowOpitionList ] = useState(false)
    return (
        <>
            <FilterSelectContainer>
                <p>Filter by Region</p>
                <MdKeyboardArrowDown  onClick={() => setShowOpitionList(value => !value)}/>
            </FilterSelectContainer>
            { showOpitionList && (
                <OptionListRegion>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europa</li>
                    <li>Oceania</li>
                </OptionListRegion>
            ) }
        </>
    )
}
 
