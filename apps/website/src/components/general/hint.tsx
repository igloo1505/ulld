import React from "react";

interface HintProps {
  children: string;
}

const Hint = ({ children }: HintProps) => {
  return (
    <div className={"text-sm"}>
      <span className={"text-hint font-bold"}>Hint:</span>
      <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>{children}</span>
    </div>
  );
};

Hint.displayName = "Hint";

export default Hint;
