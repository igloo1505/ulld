import { getPage, getPages } from "docs";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getComponentMap } from "@ulld/component-map/client";
import componentMap from "#/fumaDocs/generatedComponentMap.json";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { TypeTable } from "#/components/docs/typeTable";
import { Content } from "./content";

export default async function Page({
    params,
}: {
    params: { slug?: string[] };
}) {
    const page = getPage(params.slug);

    if (page == null) {
        notFound();
    }

    /* const MDX = page.data.exports.default; */
    let componentData =
        page.data.title in componentMap
            ? componentMap[page.data.title as keyof typeof componentMap]
            : undefined;

    const components = componentData
        ? getComponentMap(
            componentData,
            { avoidKeys: ["mark"] },
            serverComponentMap,
        )
        : {};

    console.log("page: ", page)

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsBody
                className={
                    "@container/mdx prose dark:prose-invert prose-a:text-link mdx"
                }
            >
                <MathjaxProvider>
                    <h1>{page.data.title}</h1>
                    <Content code={page.data.body.code} TypeTableComponent={TypeTable} />
                </MathjaxProvider>
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
