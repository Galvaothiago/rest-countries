import { GridError } from './styles'

export function Error({ onError }) {
    const codeError = onError?.message_error?.split('code')[1]
    
    return (
        <GridError>
        <div>
          <div>
            <p>{onError?.message}</p>
            <img src="/sad.png" alt="Page not found" /> 
          </div>
          <span>{codeError}</span>
        </div>
      </GridError>
    )
}