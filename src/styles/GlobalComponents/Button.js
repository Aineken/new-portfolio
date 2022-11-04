import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => (
  <ButtonBack alter={props.alter} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alter={props.alter}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
