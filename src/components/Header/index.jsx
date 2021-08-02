import { ToggleTheme } from '../ToggleTheme'
import { HeaderContainer } from './styles'

export function Header({ onRequest, toggle }) {
    return (
        <HeaderContainer>
            <p onClick={() => onRequest()}>Where in the world?</p>
            <ToggleTheme onToggle={toggle} />
        </HeaderContainer>
    )
}