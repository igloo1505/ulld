import React, { ReactNode } from "react";
import { allDocumentations } from "contentlayer/generated";
import MathjaxProvider from "../utility/providers/mathjax";
import MDXArticle, { MDXArticleProps } from "../layouts/mdxArticle";
import InlineCode from "../general/inlineCode";

interface EmbeddedDocsProps extends Omit<MDXArticleProps, "title"> {
    component: string;
    title?: ReactNode
    titleAsCode?: boolean
}

export const EmbeddedDocs = ({ component, title, titleAsCode, ...props }: EmbeddedDocsProps) => {
    const item = allDocumentations.find(
        (f) => f.component === component,
    );
    if (!item) {
        throw new Error(
            `No article found for ${component} in EmbbeddedDocs component.`,
        );
    }
    return (
        <MathjaxProvider>
        <div className={"w-full h-fit inline-block"}>
            {title && <div className={"my-4"}>{titleAsCode ? <InlineCode>{title}</InlineCode> : title}</div>}
            <MDXArticle 
                {...props}
                paddingTop={false}
                embedded
                className={title ? "pt-0" : ""}
                mdx={item}
            />
        </div>
        </MathjaxProvider>
    );
};

EmbeddedDocs.displayName = "EmbeddedDocs";
