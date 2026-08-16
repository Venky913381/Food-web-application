import styled from "styled-components"

export const StyledAnchor = styled.a`
  display: block;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  margin: ${({ m = "0" }) => m};
  padding: ${({ p = "0" }) => p};
`
