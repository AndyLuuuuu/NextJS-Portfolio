import React from "react";
import {
  MenuContainer,
  MenuText,
  MenuHamburgerItem,
  MenuHamburger,
  MenuContent,
  MenuLink
} from "./MenuStyled";
import Backdrop from "../../Backdrop/Backdrop";
import { Link } from "react-scroll";
import { injectGlobal } from "styled-components";

injectGlobal`
.linkstyle {
  font-size: 3rem;
  font-weight: 700;
  padding: .5rem 3rem;
  margin: .5rem 0;
  color: grey;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  text-align: center;
  transition: all 350ms ease-in-out;
  &::before, &::after {
  font-family: FontAwesome;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  content: "";
  position: absolute;
  height: 99%;
  width: 100%;
  border-radius: 5px;
  
  transform: scale(0,1);
  transition: transform 500ms ease-in-out;
  }
  &::before {
    font-weight: 900;
    z-index: -1;
  transform-origin: left;
  background-color: hsla(176, 100%, 50%, 0.6)
  }
  &::after {
    z-index: -2;
  transform-origin: right;
  background-color: hsla(63, 100%, 50%, 0.6)
  }
  &:hover::before {
    transform: scale(1,1);
  }
  &:hover::after {
    transform: scale(1,1);
  }
  &:hover {
    color: #FCFBF0;
  }
  @media (max-width: 30rem) {
    font-size: 2rem;
  }
}
.active {
  color: #00e5ee;
}
.mobile {
  display: none;
  @media (max-width: 62.6rem) {
    display: initial;
  }
}
.desktop {
  display: none;
  @media (min-width: 62.6rem) {
    display: initial;
  }
}`;

export default props => {
  return (
    <React.Fragment>
      <Backdrop showMenu={props.showMenu} clicked={props.clicked}>
        <MenuContent>
          <Link
            onClick={props.clicked}
            className="linkstyle"
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            onClick={props.clicked}
            className="linkstyle"
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            onClick={props.clicked}
            className="linkstyle desktop"
            to="Portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            onClick={props.clicked}
            className="linkstyle mobile"
            to="MobilePortfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            onClick={props.clicked}
            className="linkstyle"
            to="Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </MenuContent>
      </Backdrop>
      <MenuContainer onClick={props.clicked}>
        <MenuHamburger onClick={props.clicked}>
          <MenuHamburgerItem showMenu={props.showMenu} />
          <MenuHamburgerItem showMenu={props.showMenu} />
          <MenuHamburgerItem showMenu={props.showMenu} />
          <MenuHamburgerItem showMenu={props.showMenu} />
        </MenuHamburger>
      </MenuContainer>
    </React.Fragment>
  );
};
