import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface DocsSyntaxPageProps { }

const includeCssClasses = "w-full text-start text-xl font-semibold my-4 flex flex-row justify-start items-start gap-4 text-sm text-gray-600 dark:text-gray-400 csl-bib-body"

const DocsSyntaxPage = (props: DocsSyntaxPageProps) => {
    const doc = allStaticDocs.find((f) => f.id === "syntaxDocs");
    if (!doc) {
        throw new Error("No syntax documentation found.");
    }
    return (
        <MathjaxProvider>
            <MDXArticle
                mdx={doc}
                docsWide
                paddingTop={false}
                className={"!max-w-full"}
            />
        </MathjaxProvider>
    );
};

DocsSyntaxPage.displayName = "DocsSyntaxPage";

export default DocsSyntaxPage;
