import { getPage, getPages } from "sources/demos";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageType } from "#/types/general";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import DocsPageComponent from "#/components/docUtils/docsPage";

const docsBodyId = "ulld-blog-container";


interface PageProps {
    params: { slug?: string[] };
    searchParams: { id?: string };
}

const getPageInternal = ({
    params,
    searchParams,
}: PageProps): PageType | undefined => {
    return searchParams && searchParams.id
        ? getPageById(getPages() as PageType[], searchParams.id)
        : (getPage(params.slug) as PageType | undefined);
};

export default function Page({ params, searchParams }: PageProps) {
    const page = getPageInternal({params, searchParams})
    if (!page) {
        notFound();
    }


    return (
        <DocsPageComponent page={page} id={docsBodyId} />
    )
}

export function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({ params, searchParams }: PageProps) {

    const page = getPageInternal({params, searchParams})
    if (!page) {
        notFound();
    }

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
