import TerminologyCard from "#/components/docUtils/terminologyCard";
import { staticDocsData } from "#/staticData/docs";
import { notFound } from "next/navigation";
import React from "react";

interface TerminologyDocsPageProps {
    searchParams: {
        id: string;
    };
}

const TerminologyDocsPage = ({
    searchParams: { id },
}: TerminologyDocsPageProps) => {
    const item = staticDocsData.terms.find((t) => t.id === id);
    if (!item) {
        return notFound();
    }
    return <TerminologyCard {...item} />
};

TerminologyDocsPage.displayName = "TerminologyDocsPage";

export default TerminologyDocsPage;
