import styled from 'styled-components'

export const ContainerCountryInfo = styled.div`
    width: 100%;
    min-height: 350px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3rem;

    img {
        max-width: 33rem;
        width: 100%;
        max-height: 22rem;
        height: 100%;
    }

    > div {
        max-width: 35rem;
        width: 100%;
        min-height: 350px;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-between;

        padding: 2rem 0;

        h2 {
            color: ${({ theme }) => theme.text};
        }

        section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            margin-top: -2.5rem;
            
            div {
                p {
                    color: ${({ theme }) => theme.textInput};
                    font-size: .95rem;
                    
                    label {
                        color: ${({ theme }) => theme.text};
                        font-size: .88rem;
                    }

                    & + p {
                        margin-top: .3rem;
                    }
                }
            }
        }

        footer {
            display: flex;
            align-items: center;

            span {
                color: ${({ theme }) => theme.text};
                font-size: .88rem; 
            }

            > div {
                display: flex;
                flex-wrap: wrap;
                gap: .5rem;


                div {
                    padding: .25rem 1.2rem;
                    background: ${({ theme }) => theme.background};
                    color: ${({ theme }) => theme.textInput};
                    flex-wrap: wrap;
    
                    font-size: .8rem;
                    margin-left: .5rem;
                    border-radius: 5px;
    
                    cursor: pointer;
                    transition: all .2s;
    
                    -webkit-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
                    -moz-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
                    box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    
                    &:hover {
                        filter: brightness(.95);
                    }
                }
            }

        }
    }
`