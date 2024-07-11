import { getPage } from "#/fumaDocs/sources/main";
import { DocsPageProps } from "fumadocs-ui/page";

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
    };
} & ReturnType<typeof getPage>;
