import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allDocumentations } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

interface DeveloperDocsByIdPageProps {
    params: {
        id: string;
    };
}

const DeveloperDocsByIdPage = ({ params }: DeveloperDocsByIdPageProps) => {
    let item = allDocumentations.find((f) => f.id === params.id);
    if (!item) {
        return notFound();
    }
    return (
        <MathjaxProvider>
            <MDXArticle mdx={item} />
        </MathjaxProvider>
    );
};

DeveloperDocsByIdPage.displayName = "DeveloperDocsByIdPage";

export default DeveloperDocsByIdPage;
