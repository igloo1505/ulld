import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { allSlotDocs } from 'contentlayer/generated';
import { notFound } from "next/navigation";
import React from "react";

interface SlotDocsPageProps {
    params: {
        slot: string;
    };
}

const SlotDocsPage = ({ params }: SlotDocsPageProps) => {
    const item = allSlotDocs.find((f) =>
        Boolean(f.slot === params.slot && !f.subSlot),
    );
    if (!item) {
        return notFound();
    }
    return (
        <MathjaxProvider>
            <MDXArticle mdx={item} />
        </MathjaxProvider>
    );
};

SlotDocsPage.displayName = "SlotDocsPage";

export default SlotDocsPage;
