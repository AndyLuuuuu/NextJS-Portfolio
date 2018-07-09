import styled from "styled-components";

export const Backdrop = styled.div`
  content: "";
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  transition: all 350ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: ${props => props.theme.backdrop};
  opacity: ${props => (props.showMenu ? "0.95" : "0")};
  transform: translateY(${props => (props.showMenu ? null : "-100%")});
`;
