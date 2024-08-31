import { getPage, getPages } from "sources/demos";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PageType } from "#/types/general";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import DocsPageComponent from "#/components/docUtils/docsPage";

const docsBodyId = "ulld-demo-container";


interface PageProps {
    params: { slug?: string[] };
    searchParams: { id?: string };
}

interface DocOutput {
    data: {
        content: string;
        toc: any;
        full?: boolean;
        body: any;
        title: string;
        description?: string;
    };
}



export default function Page({ params, searchParams }: PageProps) {
    console.log("params in demos: ", params)
    const page: PageType | undefined = getPage(params.slug) as
        | PageType
        | undefined;

    if (!page) {
        return notFound();
    }

    return (
        <DocsPageComponent page={page} id={docsBodyId} />
    )
}

export function generateStaticParams() {
    const pages = getPages()
    console.log("pages in demos: ", pages)
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}


export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page: DocOutput = getPage(params.slug) as unknown as DocOutput;
    if (!page) {
        return notFound();
    }
    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
