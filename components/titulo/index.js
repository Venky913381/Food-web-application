import { useState } from 'react'
import { StyledTitle, StyledButton } from './styles'

const Titulo = () => {
  const [state, setState] = useState(false)
  return (
    <>
      <StyledTitle state={state} m='40px 0'>
        Titulo
      </StyledTitle>
      <h1>{state ? 'verdadero' : 'falso'}</h1>
      <StyledButton onClick={() => setState(!state)} variant='black'>
        click en mi
      </StyledButton>
    </>
  )
}

export default Titulo
