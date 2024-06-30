import React, { ReactNode } from "react";
import MDXArticle, { MDXArticleProps } from "../layouts/mdxArticle";

interface EmbeddedDocsProps extends Omit<MDXArticleProps, "title"> {
    component: string;
    title?: ReactNode
    titleAsCode?: boolean
}

export const EmbeddedDocs = ({ component, title, titleAsCode, ...props }: EmbeddedDocsProps) => {
    return (
    <div className={"text-8xl"}>REPLACE ALL INSTANCES OF THE EMBEDDEDDOCS component!</div>
    );
};

EmbeddedDocs.displayName = "EmbeddedDocs";
