import { getPage, getPages } from "docs";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
import MathjaxProvider from "#/components/utility/providers/mathjax";
/* import { TypeTable } from "fumadocs-ui/components/type-table"; */
import {
    Pre,
    CodeBlock,
    CodeBlockProps,
} from "fumadocs-ui/components/codeblock";
import cn from "@ulld/utilities/cn";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { ReactNode } from "react";
import ApplyMathjaxBandaid from "#/components/utility/applyMathjaxBandaid"

const docsBodyId = "ulld-documentation-container"

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

export default function Page({ params }: { params: { slug?: string[] } }) {
    console.log("params: ", params)
    const page = getPage(params.slug)
    console.log("page: ", page);

    const rawContent = 
        page && "content" in page?.data ? page?.data.content : undefined;

    console.log("rawContent: ", rawContent)

    if (!page) notFound();

    const filteredComponents = getComponentMap(
        rawContent as string,
        { avoidKeys: ["mark"] },
        serverComponentMap,
    );
    const components = {
        ...defaultMdxComponents,
        ...filteredComponents,
        // These Tab and Tabs components are used to automatically create pnpm, npm, bun and yarn command dynamically, but are causing conflicts with the existing TabGroup component, I think? Disabling for now since the app should probably rely on the stuff I'm trying to convince people to use.
        /* Tab: Tab, */
        /* Tabs: Tabs, */
        /* code: InlineCode, */
        pre: ({ title, className, icon, allowCopy, ...props }: CodeBlockProps) => (
            <CodeBlock title={title} icon={icon} allowCopy={typeof allowCopy === "boolean" ? allowCopy : true}>
                <Pre className={cn("max-h-[400px]", className)} {...props} />
            </CodeBlock>
        ),
          InstallTabs: ({
            items,
            children,
          }: {
            items: string[];
            children: ReactNode;
          }) => (
            <Tabs items={items} id="package-manager">
              {children}
            </Tabs>
          ),
    };


    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsBody id={docsBodyId} className={"@container/mdx"}>
                <MathjaxProvider>
                    <h1>{page.data.title}</h1>
                    <MDXContent code={page.data.body} components={components as any} />
                    <ApplyMathjaxBandaid container={docsBodyId}/>
                </MathjaxProvider>
            </DocsBody>
        </DocsPage>
    );
}

export function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page: DocOutput = getPage(params.slug) as unknown as DocOutput;

    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
