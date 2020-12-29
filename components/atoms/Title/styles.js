import styled from 'styled-components'

export const StyledTitle = styled.h3`
  font-size: ${({ s = '22px' }) => s};
  font-weight: ${({ weight = '500' }) => weight};
  color: ${({ theme, color = 'grayPrimary' }) => theme[color]};
  line-height: 1.2;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  text-align: ${({ align = 'left' }) => align};
`
