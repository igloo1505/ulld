import ApplyMathjaxBandaid from "#/components/utility/applyMathjaxBandaid";
import React, { ReactNode } from "react";
import "#/styles/proseStyles.scss"
import MDXArticle from "#/components/layouts/mdxArticle";

interface DocsLayoutProps {
  children: ReactNode;
  modal?: ReactNode;
}

const containerId = "docs-container"

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return <div className={"w-full h-full min-h-screen flex flex-col justify-start items-center"}>
        <MDXArticle id={containerId}>
            {children}
        </MDXArticle>
    </div>;
};

DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
