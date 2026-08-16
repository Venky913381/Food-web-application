import styled from 'styled-components'

export const StyledText = styled.p`
  font-size: ${({ s = '14px' }) => s};
  font-weight: ${({ weight = '500' }) => weight};
  color: ${({ theme, color = 'graySecondary' }) => theme[color]};
  line-height: ${({ lh = '1.2' }) => lh};
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  text-align: ${({ align = 'left' }) => align};
`
