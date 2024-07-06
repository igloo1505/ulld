import React, { ReactNode } from "react";
/* import { allDocumentations } from "contentlayer/generated"; */
import MathjaxProvider from "../utility/providers/mathjax";
import MDXArticle, { MDXArticleProps } from "../layouts/mdxArticle";
import InlineCode from "../general/inlineCode";

interface EmbeddedDocsProps extends Omit<MDXArticleProps, "title"> {
    component: string;
    title?: ReactNode
    titleAsCode?: boolean
}

export const EmbeddedDocs = ({ component, title, titleAsCode, ...props }: EmbeddedDocsProps) => {
    /* const item = allDocumentations.find( */
    /*     (f) => f.component === component, */
    /* ); */
        throw new Error(
            `No article found for ${component} in EmbbeddedDocs component.`,
        );
};

EmbeddedDocs.displayName = "EmbeddedDocs";
