import styled, { css } from 'styled-components'

export const ContainerInput = styled.div`
  position: relative;
  width: max-content;

  & svg{
    position: absolute;
    width: 15px;
    height: 15px;
  }

  & .iconRight{
    top:50%;
    left: 20px;
    transform: translate(0, -50%);
  }

  & .iconLeft{
    top:50%;
    right: 20px;
    transform: translate(0, -50%);
  }
`

export const StyledInput = styled.input`
  width: ${({ w = '300px' }) => w};
  height: ${({ h = '55px' }) => h};
  border-radius: ${({ br = '15px' }) => br};
  background-color: ${({ theme, bg = 'white' }) => theme[bg]};
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '14px 22px' }) => p};
  outline: none;

  ${({ iconRight }) => iconRight && css`
    padding-left: 45px;
  `}

  ${({ iconLeft }) => iconLeft && css`
    padding-right: 45px;
  `}
`
