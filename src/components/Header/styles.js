import styled from 'styled-components'

export const HeaderContainer = styled.header`
    max-width: 1440px;
    width: 100%;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 4rem;
    background: var(--DarkBlue);
    color: var(--White);

    position: sticky;

    -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
    
    p {
        font-weight: 700;
    }
`