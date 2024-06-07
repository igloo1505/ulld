import MDXArticle from "#/components/layouts/mdxArticle";
import { allDemos } from "contentlayer/generated";
import React from "react";

interface PlotDemoPageProps { }

const PlotDemoPage = (props: PlotDemoPageProps) => {
    const item = allDemos.find((a) => a.id === "plotDemo");
    if (!item) {
        throw new Error("No plot demo found");
    }
    return <MDXArticle
        paddingTop={false}
        mdx={item}
    />;
};

PlotDemoPage.displayName = "PlotDemoPage";

export default PlotDemoPage;
