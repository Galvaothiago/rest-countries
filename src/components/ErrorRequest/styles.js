import styled from 'styled-components'

export const GridError = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 2rem;

    display: grid;
    place-items: center;

    > div {
    max-width: 45rem;
    width: 100%;
    height: 19rem;
    padding: 2rem;

    display: flex;

    background: ${({ theme }) => theme.background};
    border-radius: 10px;

    -webkit-box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};
    -moz-box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};
    box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};

    div {
        flex: .75;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;
        padding-right: 1rem;

        p {

        text-align: center;
        color: ${({ theme }) => theme.textInput};
        font-weight: 500;
        font-size: 2rem;
        font-family: 'Rajdhani', sans-serif;
        }

        i {
        font-size: 3rem;
        }
    }

    span {
        flex: .25;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-left: 1rem;

        border-left: ${({ theme }) => `1px solid ${theme.textInput}`};

        text-align: center;
        color: ${({ theme }) => theme.text};
        font-family: 'Rajdhani', sans-serif;
        font-weight: 100;
        font-size: 4rem;
    }
    }

`