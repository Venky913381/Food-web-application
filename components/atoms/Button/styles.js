import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex; 
  align-items: center; 
  justify-content: center;
  background-color: ${({ theme, bg = 'yellow' }) => theme[bg]};
  color: ${({ theme, color = 'grayPrimary' }) => theme[color]};
  height: ${({ h = '60px' }) => h};
  width: ${({ w = 'auto' }) => w};
  border-radius: 15px;
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = '0 25px' }) => p};
  font-size: 16px;
  font-weight: 600;
  transition: .3s;
  cursor: pointer;
  outline: none;

  &:active{
    transform: scale(.9);
  }
`
