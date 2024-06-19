import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";


const UserDocsHomePage = () => {
    let item = allStaticDocs.find((f) => f.id === "gettingStarted");

    if (!item) {
        throw new Error("No item found for id docsHome. Fix this Einstein.");
    }

    return (
        <MathjaxProvider>
            <MDXArticle docsWide paddingTop={false} mdx={item} />
        </MathjaxProvider>
    );
};

UserDocsHomePage.displayName = "UserDocsHomePage";

export default UserDocsHomePage;
