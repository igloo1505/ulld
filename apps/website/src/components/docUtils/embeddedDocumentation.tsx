import React from "react";
import { allDocumentations } from "contentlayer/generated";
import MathjaxProvider from "../utility/providers/mathjax";
import MDXArticle, { MDXArticleProps } from "../layouts/mdxArticle";

interface EmbeddedDocsProps extends MDXArticleProps {
    component: string;
}

export const EmbeddedDocs = ({ component, ...props }: EmbeddedDocsProps) => {
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
            <MDXArticle 
                {...props}
                paddingTop={false}
                embedded
                mdx={item}
            />
        </MathjaxProvider>
    );
};

EmbeddedDocs.displayName = "EmbeddedDocs";
