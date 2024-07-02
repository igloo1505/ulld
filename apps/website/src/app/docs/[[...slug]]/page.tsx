import { getPage, getPages } from "docs";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
import MathjaxProvider from "#/components/utility/providers/mathjax";

export default function Page({ params }: { params: { slug?: string[] } }) {
    const page = getPage(params.slug);

    if (!page) notFound();

    const rawContent = page.data.content;
    const filteredComponents = getComponentMap(
        rawContent,
        { avoidKeys: ["mark"] },
        serverComponentMap,
    );
    const components = {
        ...filteredComponents,
        ...defaultMdxComponents,
    };
    return (
        <MathjaxProvider>
            <DocsPage toc={page.data.toc} full={page.data.full}>
                <DocsBody>
                    <h1>{page.data.title}</h1>
                    <MDXContent code={page.data.body} components={components as any} />
                </DocsBody>
            </DocsPage>
        </MathjaxProvider>
    );
}

export function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page = getPage(params.slug);

    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
