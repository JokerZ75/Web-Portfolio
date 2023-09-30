import React from "react";
import { ReactNode } from "react";

const Button: React.FC<{children : ReactNode, onClick?: VoidFunction}> = ({children, onClick}) => {
  return <button className="buttonEl" onClick={onClick}>{children}</button>;
};

export default Button;
