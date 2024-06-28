import { getPage, getPages } from "docs";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getComponentMap } from "@ulld/component-map/client";
import componentMap from "#/fumaDocs/generatedComponentMap.json";
import { serverComponentMap } from "#/mdx/serverComponentMap";


export default async function Page({
    params,
}: {
    params: { slug?: string[] };
}) {
    const page = getPage(params.slug);

    if (page == null) {
        notFound();
    }

    const MDX = page.data.exports.default;
    let componentData =
        page.data.title in componentMap
            ? componentMap[page.data.title as keyof typeof componentMap]
            : undefined;

    const components = componentData
        ? getComponentMap(componentData, { avoidKeys: ["mark"] }, serverComponentMap)
        : {};


    return (
        <DocsPage toc={page.data.exports.toc} full={page.data.full}>
            <DocsBody
                className={"@container/mdx prose dark:prose-invert prose-a:text-link mdx"}
            >
                <h1>{page.data.title}</h1>
                <MDX components={components} />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page = getPage(params.slug);

    if (page == null) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
