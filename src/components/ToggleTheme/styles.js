import styled, { keyframes } from 'styled-components'

export const ButtonContainer = styled.div`
    width: 4.2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 3rem;
    padding: .15rem;

    background: var(--DarkBlue);
    cursor: pointer;
`

export const Circle = styled.div`
    width: 1.7rem;
    height: 1.7rem;

    border-radius: 50%;
    background: #fff;
`


// keyframe animation

const moveMoon = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }

  50% {
    transform: translateX(0);
    opacity: 1;
  }

  65% {
    transform: translateX(-3px);
  }

  100% {
    transform: translateX(0);
  }
`;

const moveSun = keyframes`
  0% {
    transform: translateX(40px);
    opacity: 0;
  }

  50% {
    transform: translateX(0);
    opacity: 1;
  }

  65% {
    transform: translateX(3px);
  }

  100% {
    transform: translateX(0);
  }
`;


export const IconSun = styled.div`
    color: #ffff56;
    animation: ${moveSun} 1s linear 1;

    svg {
        display: block;
        width: 1rem;

        margin-left: .3rem;
        margin-right: .3rem;
       
    }
`

export const IconMoon = styled.div`
    color: #ffff56;
    animation: ${moveMoon} 1s linear 1;

    svg {
        display: block;
        width: 1rem;

        margin-left: .3rem;
        margin-right: .3rem;
       
    }
`