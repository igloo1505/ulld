import SideBySideWithSource from "#/components/layouts/withSource/main";
import React from "react";
import { notFound } from "next/navigation";
import {
    WithSourceSearchParams,
    sourceSearchParamSchema,
} from "#/utils/sourceUtils";
import { searchAllMdxById } from "#/fumaDocs/utils/searchAllMdxById";
import MDXArticle from "#/components/layouts/mdxArticle";
import { PageType } from "#/types/general";

interface WithSourcePageProps {
    searchParams: WithSourceSearchParams;
}

const WithSourcePage = ({ searchParams }: WithSourcePageProps) => {
    let params = sourceSearchParamSchema.safeParse(searchParams);
    if (!params.success) return notFound();
    const article = searchAllMdxById(params.data.id);
    if (!article) return notFound();

    return (
        <div className={"pt-[76px] min-h-screen-noNav"}>
            <SideBySideWithSource mdx={article as PageType}>
                <MDXArticle
                    className={"!max-w-full pt-8"}
                    isSource 
                    data={article as PageType}
                    paddingTop={false}
                />
            </SideBySideWithSource>
        </div>
    );
};

WithSourcePage.displayName = "WithSourcePage";

export default WithSourcePage;
