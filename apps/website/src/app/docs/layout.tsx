import ApplyMathjaxBandaid from "#/components/utility/applyMathjaxBandaid";
import React, { ReactNode } from "react";
import "#/styles/proseStyles.scss"

interface DocsLayoutProps {
  children: ReactNode;
  modal?: ReactNode;
}

const containerId = "docs-container"

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return <div className={"w-full h-full min-h-screen flex flex-col justify-start items-center"}>
        <article id={containerId} className={"prose prose-gray dark:prose-invert prose-a:text-link !max-w-[min(83%,1080px)] py-8 mx-8"}>
            <ApplyMathjaxBandaid container={containerId}/>
            {children}
        </article>
    </div>;
};

DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
