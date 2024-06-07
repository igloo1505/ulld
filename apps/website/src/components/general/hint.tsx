import React, { HTMLProps } from "react";

interface HintProps extends HTMLProps<HTMLDivElement>{
}

const Hint = ({ children, ...props }: HintProps) => {
  return (
    <div className={"text-sm mb-6"} {...props}>
      <span className={"text-hint font-bold"}>Hint:</span>
      <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>{children}</span>
    </div>
  );
};

Hint.displayName = "Hint";

export default Hint;
