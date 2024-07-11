import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface DeveloperDocsHomePageProps { }

const DeveloperDocsHomePage = (props: DeveloperDocsHomePageProps) => {
    let item = allStaticDocs.find((f) => f.id === "developerDocsHome");

    if (!item) {
        throw new Error("No item found for id developerDocsHome. Fix this Einstein.");
    }

    return (
        <MathjaxProvider>
            <MDXArticle docsWide paddingTop={false} mdx={item} />
        </MathjaxProvider>
    );
};

DeveloperDocsHomePage.displayName = "DeveloperDocsHomePage";

export default DeveloperDocsHomePage;
