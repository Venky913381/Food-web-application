import styled from 'styled-components'

export const StyledPopup = styled.div`
  background-color: ${({ theme, bg = 'white' }) => theme[bg]};
  margin: ${({ m = 'auto' }) => m};
  width: ${({ w = '300px' }) => w};
  height: ${({ h = '333px' }) => h};
  border-radius: ${({ br = '15px' }) => br};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: ${({ ta = 'center' }) => ta};
`
