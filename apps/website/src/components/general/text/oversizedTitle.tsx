import React, { ReactNode } from "react";
import clsx from "clsx";

interface OversizedTitleProps {
  children: ReactNode;
  className?: string;
}

const OversizedTitle = ({ children, className }: OversizedTitleProps) => {
  return (
    <h1 className={clsx("text-[9vw] md:text-8xl", className)}>{children}</h1>
  );
};

OversizedTitle.displayName = "OversizedTitle";

export default OversizedTitle;
