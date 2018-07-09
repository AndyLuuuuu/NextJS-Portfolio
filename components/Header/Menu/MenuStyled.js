import styled from "styled-components";
import Link from "react-scroll";

export const MenuContainer = styled.div`
  display: flex;
  margin: 2rem 2rem 0 0;
  z-index: 20;
  right: 0;
`;

export const MenuHamburger = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  @media (max-width: 68rem) {
    background-color: rgba(37, 34, 29, 0.7);
    border-radius: 50%;
    border: 3px solid ${props => props.theme.blue};
  }
`;
export const MenuText = styled.p`
  color: ${props => props.theme.darkGold};
  font-size: 1.5rem;
`;

export const MenuHamburgerItem = styled.div`
  content: "";
  width: 3rem;
  border: 2.5px solid ${props => props.theme.gold};
  background: ${props => props.theme.darkGold};
  transition: all 200ms ease-in-out;
  &:nth-of-type(1),
  &:nth-of-type(4) {
    opacity: ${props => (props.showMenu ? "0" : "1")};
  }
  &:nth-child(2) {
    margin: 0.4rem 0;
    transform: rotate(${props => (props.showMenu ? "45deg" : "0deg")});
  }
  &:nth-child(3) {
    position: absolute;
    visibility: rotate(${props => (props.showMenu ? "visible" : "hidden")});
    transform: rotate(${props => (props.showMenu ? "-45deg" : "0deg")});
  }
  @media (max-width: 68rem) {
    width: 2rem;
    border: 2px solid ${props => props.theme.gold};
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-flow: column;
`;
