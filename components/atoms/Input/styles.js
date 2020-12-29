import styled from 'styled-components'

export const StyledInput = styled.input`
  width: ${({ w = '300px' }) => w};
  height: ${({ h = '55px' }) => h};
  border-radius: ${({ br = '15px' }) => br};
  background-color: ${({ theme, bg = 'white' }) => theme[bg]};
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '15px 23px' }) => p};
`
