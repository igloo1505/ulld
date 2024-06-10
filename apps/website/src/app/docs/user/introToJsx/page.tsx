import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface DocsIntroToJsxPageProps { }

const DocsIntroToJsxPage = (props: DocsIntroToJsxPageProps) => {
    const doc = allStaticDocs.find((f) => f.id === "introToJsx");
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

DocsIntroToJsxPage.displayName = "DocsIntroToJsxPage";

export default DocsIntroToJsxPage;
