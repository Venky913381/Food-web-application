import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, overlay }) => overlay ? theme.overlay : theme.tranparent};
`

export const StyledPopup = styled.div`
  background-color: ${({ theme, bg = 'white' }) => theme[bg]};
  margin: ${({ m = 'auto' }) => m};
  width: ${({ w = '300px' }) => w};
  min-height: ${({ h = '333px' }) => h};
  padding: 20px;
  border-radius: ${({ br = '15px' }) => br};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
