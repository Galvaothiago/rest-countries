import styled from 'styled-components'

export const FilterSelectContainer = styled.div`
    width: 12rem;
    height: 2.7rem;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.background};
    border-radius: 5px;

    position: relative;

    -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);

    p {
        color: ${({ theme }) => theme.text};
        font-size: .88rem;
    }

    svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
    }

`

export const OptionListRegion = styled.ul`
    width: 12rem;
    height: auto;
    margin-top: .2rem;

    position: absolute;
    top: 9.5rem;
    right: 4rem;

    background: ${({ theme }) => theme.background};
    border-radius: 5px;
    z-index: 1;

    li {
        list-style: none;
        padding: .3rem 1rem;
        
        text-align: left;
        color: ${({ theme }) => theme.text};
        border-bottom: 1px solid var(--VeryDarkBlueBackground);

        cursor: pointer;
        transition: all .2s;

        &:hover {
            background: ${({ theme }) => theme.background3};
            color: ${({ theme }) => theme.textInput};
        }
    }
`