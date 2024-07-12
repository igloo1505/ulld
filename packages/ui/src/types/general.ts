import {
    AutoSettingType,
    ConfirmationModalConfig,
    LetterType,
    SearchAllSearchType,
} from "@ulld/utilities/types";
import { FC, ReactNode } from "react";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";

export interface ToastConfigType {
    destructive?: boolean;
    description: string;
    timeout?: number | null;
    title?: string;
}

export interface UISearchParams {
    dark?: boolean;
}

export interface ConfirmationModalProps {
    config: ConfirmationModalConfig | false;
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


export interface AutoSettingFormModalProps {
    open: boolean
    editing: AutoSettingType | undefined | null
    setOpen: (newOpen: boolean) => void
    appendSetting: (s: AutoSettingType) => void
}

export interface AutoSettingsTableProps {
    settings: AutoSettingType[];
    editing?: AutoSettingType | undefined;
    modal: FC<AutoSettingFormModalProps>
}

export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    /** Use getPaginationTemplateString exported from @ulld/utilities/paginationUtils to generate a template string, and use parsePaginationTemplateString exported from the same place to parse that string for a given page number. This avoids passing functions to possible client components and the need to pass more strings than needed to the pagination component. */
    hrefTemplate: string;
}

export interface DictionaryItemProps {
    label?: string;
    content?: string;
}

export interface DictionaryLetterList {
    children: ReactNode;
    letter: LetterType;
    currentPage?: LetterType;
}

export interface NoteSummaryProps {
    index: number;
    item: InstanceType<typeof NoteFilter>["notes"][number]
    searchType: SearchAllSearchType
}

export interface TaskListSearchResultProps {
    index: number;
    // data: // get this type
}

export interface SearchResultsPageProps {
    notes: ReactNode;
    taskLists: ReactNode;
    // equations: ReactNode abborted for now to focus on getting this thing up and running first.
}

export type BookmarksResultsPageProps = Pick<SearchResultsPageProps, "notes">;

export interface NotesSearchResultsListProps {
    children: ReactNode;
}
