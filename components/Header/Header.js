import React, { Component } from "react";
import { HeaderContainer, LogoImage } from "./HeaderStyled";
import Menu from "./Menu/Menu";
import LogoSrc from "../../static/images/logo/New Logo Gold.svg";

class Header extends Component {
  state = {
    showMenu: false
  };

  onMenuClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return (
      <HeaderContainer>
        <LogoImage
          src={LogoSrc}
          onClick={() => Home.scrollIntoView({ behavior: "smooth" })}
        />
        <Menu showMenu={this.state.showMenu} clicked={this.onMenuClick} />
      </HeaderContainer>
    );
  }
}

export default Header;
