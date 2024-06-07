import MDXArticle from "#/components/layouts/mdxArticle";
import ComingSoon from "#/components/utility/comingSoon";
import { allDemos } from "contentlayer/generated";
import React from "react";

interface LayoutDemoPageProps { }

const LayoutDemoPage = (props: LayoutDemoPageProps) => {
    const item = allDemos.find((a) => a.id === "layoutDemo");
    if (!item) {
        throw new Error("No Layout demo found");
    }
    return <MDXArticle paddingTop={false} mdx={item} />;
};

LayoutDemoPage.displayName = "LayoutDemoPage";

export default LayoutDemoPage;
