import MDXArticle from "#/components/layouts/mdxArticle";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface DocsSyntaxPageProps { }

const DocsSyntaxPage = (props: DocsSyntaxPageProps) => {
    const doc = allStaticDocs.find((f) => f.id === "syntaxDocs");
    if (!doc) {
        throw new Error("No syntax documentation found.");
    }
    return <MDXArticle mdx={doc} paddingTop={false} />;
};

DocsSyntaxPage.displayName = "DocsSyntaxPage";

export default DocsSyntaxPage;
