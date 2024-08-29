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
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}


export function generateMetadata({ params }: { params: { slug?: string[] } }) {

    const page: DocOutput = getPage(params.slug) as unknown as DocOutput;

    if (!page) {
        return notFound();
    }

    let x: Metadata = {}

    if(page?.data?.title){
        x.title = page.data.title
    }
    if(page.data?.description){
        x.description = page.data.description
    }

    return x
}
