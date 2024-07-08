import { AutoSettingType, LetterType } from "@ulld/utilities/types";
import { ReactNode, ReactNodeArray } from "react";

export interface ToastConfigType {
    destructive?: boolean;
    description: string;
    timeout?: number | null;
    title?: string;
}

export interface UISearchParams {
    dark?: boolean;
}

export const pdfStateClasses = {
    loading: "pdf-loading",
    annotating: "pdf-annotating",
    allPages: "pdf-show-all",
    toc: "pdf-show-toc",
    withNavigation: "pdf-with-navigation",
    asGrid: "pdf-as-grid",
};

export interface ChildrenOnly {
    children: React.ReactNode;
}

export interface AutoSettingsTableProps {
    settings: AutoSettingType[];
    editing?: AutoSettingType | undefined;
}

export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    /** Use getPaginationTemplateString exported from @ulld/utilities/paginationUtils to generate a template string, and use parsePaginationTemplateString exported from the same place to parse that string for a given page number. This avoids passing functions to possible client components and the need to pass more strings than needed to the pagination component. */
    hrefTemplate: string;
}


export interface DictionaryItemProps { 
    label?: string
    content?: string
}

export interface DictionaryLetterList {
    children: ReactNode;
    letter: LetterType
    currentPage?: LetterType
}

