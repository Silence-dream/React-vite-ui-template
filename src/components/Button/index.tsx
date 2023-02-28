import { useState } from "react";
import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";

interface ButtonProps {
  ButtonProps?: any;
  AntdButtonProps?: AntdButtonProps;
}

export default function Button({AntdButtonProps}: ButtonProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <AntdButton {...AntdButtonProps} onClick={() => setCount(count + 1)}>
        Click me
        {count}---
      </AntdButton>
    </>
  );
}
