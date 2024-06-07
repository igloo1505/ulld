import MDXArticle from "#/components/layouts/mdxArticle";
import MdxList from "#/components/layouts/mdxList/main";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import InternalReduxProvider from "#/state/provider";
import { allDocumentations, allStaticDocs } from "contentlayer/generated";
import React from "react";

interface Props {
    searchParams: {
        category?: string;
    };
}

const ComponentDocsPage = ({ searchParams: { category } }: Props) => {
    /* let item = allStaticDocs.find((f) => f.id === "docsHome"); */

    const items = allDocumentations
        .filter((a) => a.category === category)
        .sort((a, b) => (a.component > b.component ? 1 : -1));

    if (category) {
        return <MdxList items={items} />;
    }

    const componentsHome = allStaticDocs.find((f) => f.id === "componentsHome");
    if (!componentsHome) {
        throw new Error("No components home page article found");
    }

    return (
        <InternalReduxProvider>
            <MathjaxProvider>
                <MDXArticle mdx={componentsHome} paddingTop={false} />
            </MathjaxProvider>
        </InternalReduxProvider>
    );
};

ComponentDocsPage.displayName = "ComponentDocsPage";

export default ComponentDocsPage;
