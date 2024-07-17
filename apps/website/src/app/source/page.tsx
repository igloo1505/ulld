import WithNavContainer from "#/components/layouts/withNavContainer";
import SourceCode from "#/components/layouts/withSource/sourceCode";
import { searchAllMdxById } from "#/fumaDocs/utils/searchAllMdxById";
import {
    WithSourceSearchParams,
    sourceSearchParamSchema,
} from "#/utils/sourceUtils";
import { notFound } from "next/navigation";
import React from "react";

interface SourcePageProps {
    searchParams: WithSourceSearchParams;
}

const SourcePage = ({ searchParams }: SourcePageProps) => {
    let params = sourceSearchParamSchema.safeParse(searchParams);
    if (!params.success) return notFound();
    const article = searchAllMdxById(params.data.id);
    if (!article) return notFound();
    return (
        <WithNavContainer>
            <SourceCode content={article.data.content} />
        </WithNavContainer>
    );
};

SourcePage.displayName = "SourcePage";

export default SourcePage;
