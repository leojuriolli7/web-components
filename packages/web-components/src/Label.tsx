import * as React from "react";

export interface LabelProps {
  children: React.ReactNode;
}

export function Label(props: LabelProps) {
  return <label>{props.children}</label>;
}

Label.displayName = "Label";
