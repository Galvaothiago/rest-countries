import { useEffect, useState } from 'react'
import { ButtonContainer, Circle, IconMoon, IconSun } from "./styles";
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { useLocalStorage } from '../../utils/useLocalStorage';

export function ToggleTheme({ onToggle }) {
    const [ showIconDarkMode, setShowIconDarkMode ] = useState(true)
    const [ isDarkTheme ] = useLocalStorage('isDarkTheme', true)

    const handleChangeDarkMode = () => {
      onToggle()
      setShowIconDarkMode(oldState => !oldState)
    }

    useEffect(() => {
      if(isDarkTheme === undefined) {
        setShowIconDarkMode(true)
        return
      }
      setShowIconDarkMode(isDarkTheme)
    }, [])

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