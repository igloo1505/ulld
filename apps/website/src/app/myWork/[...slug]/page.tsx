import { getPage, getPages } from "sources/myNotes";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PageType } from "#/types/general";
import DocsPageComponent from "#/components/docUtils/docsPage";

const docsBodyId = "ulld-mywork-container";

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
    "user/components": "/docs/user/components/Academic/abstract",
};

export default function Page({ params }: { params: { slug?: string[] } }) {
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

    return <DocsPageComponent id={docsBodyId} page={page} />;
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
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
