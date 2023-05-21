import { useState, MouseEvent } from "react";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Toggle(Props: ToggleProps) {
  return <button onClick={Props.ClickHandler}>Toggle</button>;
}
