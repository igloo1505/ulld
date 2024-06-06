import MDXArticle from "#/components/layouts/mdxArticle";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

const DocsHomePage = () => {
    let item = allStaticDocs.find((f) => f.id === "docsHome");
    if (!item) {
        throw new Error("No item found for id docsHome. Fix this Einstein.");
    }

    return <MDXArticle paddingTop={false} mdx={item} />;
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
