import React from "react";
import { Backdrop } from "./BackdropStyled";

export default props => {
  return (
    <Backdrop showMenu={props.showMenu} onClick={props.clicked}>
      {props.children}
    </Backdrop>
  );
};
