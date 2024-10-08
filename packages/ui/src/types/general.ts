import {
    AutoSettingType,
    ContentHeading,
    LetterType,
    NoteTypePageProps,
    SearchAllSearchType,
} from "@ulld/utilities/types";
import { ComponentType, FC, ReactNode } from "react";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { ComponentDocsQueryParams } from "@ulld/utilities/types";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { NoteDetailSheetProps } from "@ulld/navigation/types";

type SecondarySearchResultData = Awaited<
        ReturnType<InstanceType<typeof NoteFilter>["getQuerySecondaryData"]>
    >


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
    appConfig: AppConfigSchemaOutput
}

export interface ChildrenOnly {
    children: React.ReactNode;
}

export interface AutoSettingFormModalProps {
    open: boolean;
    editing: AutoSettingType | undefined | null;
    setOpen: (newOpen: boolean) => void;
    appendSetting: (s: AutoSettingType) => void;
}

export interface AutoSettingsTableProps {
    settings: AutoSettingType[];
    editing?: AutoSettingType | undefined;
    modal: FC<AutoSettingFormModalProps>;
}

export type PaginationLocationType = "noteSearchResult"

export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    /** Use getPaginationTemplateString exported from @ulld/utilities/paginationUtils to generate a template string, and use parsePaginationTemplateString exported from the same place to parse that string for a given page number. This avoids passing functions to possible client components and the need to pass more strings than needed to the pagination component. */
    hrefTemplate: string;
    implementationType?: PaginationLocationType
}

export interface DictionaryItemProps {
    label?: string | null;
    content?: string | null;
}

export interface DictionaryLetterListProps {
    children: ReactNode;
    letter: LetterType;
    currentPage?: number
}

export interface NoteSummaryProps {
    index: number;
    item: InstanceType<typeof NoteFilter>["notes"][number];
    searchType: SearchAllSearchType;
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

export interface LoadingIndicatorProps {
    loading: boolean;
    label?: ReactNode;
    fullScreen?: boolean;
    /** @default 100 */
    size?: number;
}

export type NoteTypeSearchResultListProps = Pick<
    SearchResultsPageProps,
    "notes"
> & {
    secondaryData: SecondarySearchResultData
};

export interface NotePageWrapperProps extends NoteTypePageProps {
    children: ReactNode;
    docTypeData?: AppConfigSchemaOutput["noteTypes"][number];
    toc: ComponentType<NoteDetailSheetProps>
}

export interface NoteTypeSecondaryFilterProps extends NoteTypePageProps {
    noteType: AppConfigSchemaOutput["noteTypes"][number] | undefined;
    data: SecondarySearchResultData;
}


export interface ComponentDocsListPageProps {
    searchParams: ComponentDocsQueryParams;
    items: BuildStaticDataOutput["componentDocs"];
}

export interface ComponentDocWrapperProps {
    headings: ContentHeading[];
    item: BuildStaticDataOutput["componentDocs"][number];
    children: ReactNode;
    toc: ComponentType<NoteDetailSheetProps>;
}


export type ProvidedNoteDetailSheet = ComponentType<Omit<NoteDetailSheetProps, "docTypeData" | "noteProps">>


