import { ButtonContainer } from './styles'
import { Link } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'

export function BackButton() {
    return (
        <ButtonContainer>
            <Link to="/">
                <BsArrowLeft />
                Back
            </Link>
        </ButtonContainer>
    )
}