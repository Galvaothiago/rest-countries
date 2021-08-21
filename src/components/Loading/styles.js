import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
`

export const Container = styled.div`
    display: flex;
    justify-content: center;

    div {
        max-width: 30rem;
        width: 100%;
        height: 15rem;

        display: grid;
        place-items: center;

        svg {
            font-size: 2rem;
            color: ${({ theme }) => theme.text};

            animation: ${rotate} 1s infinite  linear;
        }
    }

`

