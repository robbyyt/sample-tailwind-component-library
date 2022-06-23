import React from "react";
import { ButtonLink, FaArrowRightIcon, ButtonLabel } from "./style";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return(
    <ButtonLink
    href="https://www2.bora.com/en-int/cooktop-extractor-systems"
    target="_blank"
    >
      <div className="button-content-container">
         <ButtonLabel>
          {props.label}
          <FaArrowRightIcon />
         </ButtonLabel>
      </div>
    </ButtonLink>
  );
};

export default Button;
