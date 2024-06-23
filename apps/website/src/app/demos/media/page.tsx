import MDXArticle from "#/components/layouts/mdxArticle";
import { allDemos } from "contentlayer/generated";
import React from "react";

interface MediaDemoPageProps { }

const MediaDemoPage = (props: MediaDemoPageProps) => {
    const item = allDemos.find((a) => a.id === "mediaDemo");
    if (!item) {
        throw new Error("No media demo found");
    }
    return <MDXArticle
        paddingTop={false}
        mdx={item}
    />;
};

MediaDemoPage.displayName = "MediaDemoPage";

export default MediaDemoPage;
