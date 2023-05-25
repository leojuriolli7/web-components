import type { ReactNode } from "react";
import * as S from "./styles";

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  const onButtonClick = () => console.log("clicked");

  return <S.Button onClick={onButtonClick}>{props.children}</S.Button>;
}

Button.displayName = "Button";
