import { ToggleTheme } from '../ToggleTheme'
import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

export function Header({ onRequest, toggle }) {
    return (
        <HeaderContainer>
            <p onClick={() => onRequest()}><Link to="/">Where in the world?</Link></p>
            <ToggleTheme onToggle={toggle} />
        </HeaderContainer>
    )
}