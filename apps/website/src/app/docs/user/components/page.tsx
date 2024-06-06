import MDXArticle from "#/components/layouts/mdxArticle";
import MdxList from "#/components/layouts/mdxList/main";
import { staticDocsData } from "#/staticData/docs";
import { allDocumentations } from "contentlayer/generated";
import React from "react";

interface Props {
    searchParams: {
        category?: string;
    };
}

const ComponentDocsPage = ({ searchParams: { category = staticDocsData.categories[0] } }: Props) => {
    /* let item = allStaticDocs.find((f) => f.id === "docsHome"); */

    const items = allDocumentations.filter((a) => a.category === category).sort((a, b) => b.component > a.component ? 1 : -1)

    return <MdxList items={items}/>
};

ComponentDocsPage.displayName = "ComponentDocsPage";

export default ComponentDocsPage;
