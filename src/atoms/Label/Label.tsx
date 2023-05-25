import type { ReactNode } from "react";
import * as S from "./styles";

export interface LabelProps {
  children: ReactNode;
}

export function Label(props: LabelProps) {
  return <S.Label>{props.children}</S.Label>;
}

Label.displayName = "Label";
