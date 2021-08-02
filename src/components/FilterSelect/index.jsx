import { FilterSelectContainer, OptionListRegion } from "./styles"

import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from "react"

export function Select ({ onRequest }) {
    const [ showOpitionList, setShowOpitionList ] = useState(false)
    const [ choiceRegion, setChoiceRegion ] = useState('')

    const handleRequest = (event) => {
        const regionName = event.target.innerText
        onRequest(regionName)
        setChoiceRegion(regionName)

        setShowOpitionList(false)
    }
    
    return (
        <>
            <FilterSelectContainer>
                <p>{ choiceRegion || 'Filter by Region' }</p>
                <MdKeyboardArrowDown  onClick={() => setShowOpitionList(value => !value)}/>
            </FilterSelectContainer>
            { showOpitionList && (
                <OptionListRegion onClick={e => handleRequest(e)}>
                    <li>Africa</li>
                    <li>Americas</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </OptionListRegion>
            ) }
        </>
    )
}
 
