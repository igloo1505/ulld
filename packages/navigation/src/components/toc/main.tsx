import React from "react";
import { TOCProvider } from "fumadocs-core/toc";
import TocItemInternal from "./tocItem";
import { MdxNoteTocProps } from "../../types";

const TocComponent = ({ headings }: MdxNoteTocProps) => {
    return (
        <TOCProvider toc={headings}>
            {headings.map((t) => {
                return <TocItemInternal key={t.url} item={t}  />
            })}
        </TOCProvider>
    );
};

TocComponent.displayName = "TocComponent";

export default TocComponent;
