import type { getPage } from "#/fumaDocs/sources/main";
import { DocsLayout } from "fumadocs-ui/layout";
import { DocsPageProps } from "fumadocs-ui/page";
import { ComponentPropsWithoutRef } from "react";

type TocType = DocsPageProps["toc"];

export type PageType = {
    _meta: {
        filePath: string;
        fileName: string;
        directory: string;
        extension: string;
        path: string;
    };
    toc: {
        title: string;
        url: string;
        depth: number;
    }[];
    structuredData: {
        contents: any[];
        headings: {
            content: string;
            id: string;
        }[];
    };
    body: string;
    data: {
        id?: string
        images?: string[]
        toc?: TocType;
        featuredEquation?: string
        blogPin?: number;
        full?: boolean;
        body: string;
        content: string;
        updated?: string
        icon?: string;
        description?: string;
        created?: string;
        tags?: string[];
        priority?: number;
        blog?: boolean;
        titleCenter?: boolean
        category?: string;
        parseCitations?: boolean
    };
} & ReturnType<typeof getPage>;


export type BaseLayoutProps = ComponentPropsWithoutRef<typeof DocsLayout>


export type BlogSearchParams = {
    tags?: string[];
    page?: string;
    category?: string;
};
