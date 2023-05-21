import { useState, MouseEvent } from "react";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export function AButton(Props: ToggleProps) {
  return <button onClick={Props.ClickHandler}>{Props.text}</button>;
}
