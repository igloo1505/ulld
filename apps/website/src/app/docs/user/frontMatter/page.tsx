import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface DocsFrontMatterPageProps { }

const DocsFrontMatterPage = (props: DocsFrontMatterPageProps) => {
    const doc = allStaticDocs.find((f) => f.id === "frontMatterDocs");
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
            />;
        </MathjaxProvider>
    );
};

DocsFrontMatterPage.displayName = "DocsFrontMatterPage";

export default DocsFrontMatterPage;
