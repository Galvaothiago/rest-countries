import styled from 'styled-components'

export const HeaderContainer = styled.header`
    max-width: 1440px;
    width: 100%;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 4rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    position: sticky;

    -webkit-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    -moz-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    
    p {
        font-weight: 700;
        cursor: pointer;
    }
`