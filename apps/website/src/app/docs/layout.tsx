import React, { ReactNode } from "react";
import "#/styles/proseStyles.scss"

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return <div className={"w-full h-full min-h-screen flex flex-col justify-start items-center"}>
        <div>
            {children}
        </div>
    </div>;
};

DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
