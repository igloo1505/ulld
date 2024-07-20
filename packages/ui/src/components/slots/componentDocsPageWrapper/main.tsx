import React from "react";
import { ComponentDocWrapperProps } from "../../../types/general";

const ComponentDocsPageWrapper = ({
    headings,
    item,
    toc: Toc,
    children,
}: ComponentDocWrapperProps) => {
    return (
        <div className={"w-full min-h-full"}>
            <Toc 
                headings={headings}
            />
            {children}
        </div>
    );
};

ComponentDocsPageWrapper.displayName = "ComponentDocsPageWrapper";

export default ComponentDocsPageWrapper;
