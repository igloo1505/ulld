import { staticDocsData } from "#/staticData/docs";
import { ReactNode } from "react";

export interface DocsSidebarLink {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
}


export interface DocWithBack extends DocsSidebarLink {
    href: string;
    id: string;
    back?: string;
}

export interface DocCategory extends DocsSidebarLink {
    href: string;
    id: string;
    getActive?: (pathname: string) => boolean
    back?: {
        path: string;
        category: string;
    };
}


export type WithBack<T> = {
    back?: string;
    items: T;
};

export type ValidDocKeyValue = WithBack<DocCategory[]> | WithBack<DocsSidebarLink[]> | WithBack<DocWithBack[]>

type DocSidebarKey = keyof {
    [P in keyof typeof staticDocsData as (typeof staticDocsData)[P] extends ValidDocKeyValue
    ? P
    : never]: any;
};

export type KeyListItem = {
    pathname: string;
    docsKey: DocSidebarKey;
    title: string;
};
