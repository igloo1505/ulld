import { getPage, getPages } from "docs";
import type { Metadata } from "next";
import { DocsPage, DocsBody, DocsPageProps } from "fumadocs-ui/page";
import { notFound, redirect } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import {
    Pre,
    CodeBlock,
    CodeBlockProps,
} from "fumadocs-ui/components/codeblock";
import cn from "@ulld/utilities/cn";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { ComponentProps, ReactNode } from "react";
import ApplyMathjaxBandaid from "#/components/utility/applyMathjaxBandaid";
import { PageType } from "#/types/general";
import DocsPageComponent from "#/components/docUtils/docsPage";


const docsBodyId = "ulld-documentation-container";

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

type TocType = DocsPageProps["toc"]


const redirectMap: Record<string, string> = {
    "user/components": "/docs/user/components/Academic/abstract"
}

export default function Page({ params }: { params: { slug?: string[] } }) {
    const page: PageType | undefined = getPage(params.slug) as PageType | undefined

    if (!page) {
        let _slugPath = params.slug?.join("/")
        if(_slugPath && _slugPath in redirectMap){
            return redirect(redirectMap[_slugPath])
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
        let _slugPath = params.slug?.join("/")
        if(_slugPath && _slugPath in redirectMap){
            return redirect(redirectMap[_slugPath])
        }
        notFound();
    }

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}
