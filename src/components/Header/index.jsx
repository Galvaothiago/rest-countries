import { ToggleTheme } from '../ToggleTheme'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <p>Where in the world?</p>
            <ToggleTheme />
        </HeaderContainer>
    )
}