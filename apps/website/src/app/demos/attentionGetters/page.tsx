import MDXArticle from "#/components/layouts/mdxArticle";
import { allDemos } from "contentlayer/generated";
import React from "react";

interface AttentionGettersDemoPageProps { }

const AttentionGettersDemoPage = (props: AttentionGettersDemoPageProps) => {
    const item = allDemos.find((a) => a.id === "attentionGetters")
    if(!item){
        throw new Error("No Attention Getter demo found")
    }
    return (
            <MDXArticle
                paddingTop={false}
                mdx={item}
            />
    );
};

AttentionGettersDemoPage.displayName = "AttentionGettersDemoPage";

export default AttentionGettersDemoPage;
