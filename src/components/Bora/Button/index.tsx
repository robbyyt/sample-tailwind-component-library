import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return(
    <a
    className="button-link"
    href="https://www2.bora.com/en-int/cooktop-extractor-systems"
    target="_blank"
    >
      <div className="button-content-container">
         <p className="button-label">{props.label} <FaArrowRight className="icon" /></p>
      </div>
    </a>
  );
};

export default Button;
