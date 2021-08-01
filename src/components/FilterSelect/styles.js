import styled from 'styled-components'

export const FilterSelectContainer = styled.div`
    width: 12rem;
    height: 2.7rem;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--DarkBlue);
    border-radius: 5px;

    position: relative;

    -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.41);

    p {
        color: var(--White);
        font-size: .88rem;
    }

    svg {
        font-size: 1.2rem;
        color: var(--White);
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

    background: var(--DarkBlue);
    border-radius: 5px;
    z-index: 1;

    li {
        list-style: none;
        padding: .3rem 1rem;
        
        text-align: left;
        color: var(--White);
        border-bottom: 1px solid var(--VeryDarkBlueBackground);

        cursor: pointer;
        transition: all .2s;

        &:hover {
            background: var(--DarkBlueHover);
            color: var(--WhiteHover);
        }
    }
`