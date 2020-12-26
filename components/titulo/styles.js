import styled, { css } from 'styled-components'

export const StyledTitle = styled.h1`
  font-size: 32px;
  transition: .3s;
  color: ${({ theme }) => theme.yellow};
  font-family: -apple-system;
  margin: ${({ m = 0 }) => m}

  ${({ state }) => state && css`
    font-size: 64px;
  `}
`

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  background-color: ${({ theme, variant }) => theme[variant]};
`
