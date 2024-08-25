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

const redirectMap: Record<string, string> = {
};

/* const getPageInternal = ({ */
/*     params, */
/*     searchParams, */
/* }: PageProps): PageType | undefined => { */
/*     return searchParams && searchParams.id */
/*         ? getPageById(getPages() as PageType[], searchParams.id) */
/*         : (getPage(params.slug) as PageType | undefined); */
/* }; */

export default function Page({ params, searchParams }: PageProps) {
    const page: PageType | undefined = getPage(params.slug) as
        | PageType
        | undefined;

    if (!page) {
        let _slugPath = params.slug?.join("/");
        if (_slugPath && _slugPath in redirectMap) {
            return redirect(redirectMap[_slugPath]);
        }
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


export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page: DocOutput = getPage(params.slug) as unknown as DocOutput;

    if (!page) {
        let _slugPath = params.slug?.join("/");
        if (_slugPath && _slugPath in redirectMap) {
            return redirect(redirectMap[_slugPath]);
        }
        notFound();
    }

    return {
        title: page.data?.title,
        description: page.data?.description,
    } satisfies Metadata;
}
