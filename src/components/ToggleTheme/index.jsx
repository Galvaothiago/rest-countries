import { useState } from 'react'
import { ButtonContainer, Circle, IconMoon, IconSun } from "./styles";
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

export function ToggleTheme() {
    const [ showIconDarkMode, setShowIconDarkMode ] = useState(false)

    const handleChangeDarkMode = () => {
        setShowIconDarkMode(state => !state)
    }

    return (
        <ButtonContainer>
          { showIconDarkMode ? (
            <>
                <Circle onClick={handleChangeDarkMode}/>
                <IconMoon>
                     <BsMoon />
                </IconMoon>
            </>
          ) : (
            <>
            <IconSun>
                <FiSun />
            </IconSun>
            <Circle onClick={handleChangeDarkMode}/>
        </>
          ) }
        </ButtonContainer>
    )
}