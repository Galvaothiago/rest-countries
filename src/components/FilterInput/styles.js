import styled from 'styled-components'

export const FilterContainer = styled.div`
    width: 24rem;
    height: 2.7rem;
    padding: 0 1rem;

    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.background};
    border-radius: 5px;

    -webkit-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    -moz-box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);
    box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.18);

    svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
    }

    form {
        width: 22rem;
        
        input { 
            width: 100%;
            height: 2rem;
            margin-left: 1rem;
            
            background: none;
            color: ${({ theme }) => theme.text};
            border: 0;
            outline: transparent;
            
            &::placeholder {
                color: ${({ theme }) => theme.textInput};
    
            }
        }
    }
`