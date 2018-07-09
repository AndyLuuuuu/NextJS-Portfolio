import styled from "styled-components";

export const CloseButton = styled.img.attrs({
  width: props => props.size || "1rem",
  height: props => props.size || "1rem"
})`
  width: ${props => props.size};
  height: ${props => props.size};
  grid-area: 1/1/3/3;
  margin: 2rem 0 0 2rem;
  cursor: pointer;
  @media (max-width: 62.5rem) {
    display: none;
  }
`;
