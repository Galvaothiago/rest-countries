import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width: 7rem;
    height: 2rem;
    margin-top: 2rem;
    
    background: ${({ theme }) => theme.background};
    border-radius: 5px;

    -webkit-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    -moz-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    
    a {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: .5rem 1rem;
        color: ${({ theme }) => theme.textInput};
        text-decoration: none;

        svg {
            margin-right: .5rem;
            font-size: 1.3rem;
            color: ${({ theme }) => theme.text};
        }
    }


   
`