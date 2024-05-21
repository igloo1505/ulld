import WithNavContainer from "#/components/layouts/withNavContainer";
import SourceCode from "#/components/layouts/withSource/sourceCode";
import {
    WithSourceSearchParams,
    sourceSearchParamSchema,
} from "#/utils/sourceUtils";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

interface SourcePageProps {
    searchParams: WithSourceSearchParams;
}

const SourcePage = ({ searchParams }: SourcePageProps) => {
    let params = sourceSearchParamSchema.safeParse(searchParams);
    if (!params.success) return notFound();
    let article = allDocuments.find((a) => "id" in a && a.id === params.data.id);
    if (!article) return notFound();
    return (
        <WithNavContainer>
            <SourceCode content={article.body.raw} />
        </WithNavContainer>
    );
};

SourcePage.displayName = "SourcePage";

export default SourcePage;
