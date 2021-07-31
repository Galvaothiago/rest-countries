import styled from 'styled-components'

export const FilterContainer = styled.div`
    width: 24rem;
    height: 2.7rem;
    padding: 0 1rem;

    display: flex;
    align-items: center;

    background: var(--DarkBlue);
    border-radius: 5px;

    svg {
        font-size: 1.2rem;
        color: var(--White);
        cursor: pointer;
    }

    form {
        width: 70%;
        
        input {       
            margin-left: 1rem;
            height: 2rem;
            color: var(--White);
            background: none;
            border: 0;
            outline: transparent;
            
            &::placeholder {
                color: var(--White);
    
            }
        }

        button {
            margin-left: 1rem;
            display: none;
        }
    }
`