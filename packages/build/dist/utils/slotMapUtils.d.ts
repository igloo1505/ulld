import fullSlotMap from "@ulld/utilities/slotMap.json";
import type { SlotMapOfType } from "@ulld/configschema/slotMapInternalType";
import type { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
export declare const walkSlotMap: <T extends unknown, J extends unknown>(slotMap: SlotMapOfType<T>, getData: (val: T, slot: PluginSlotKey, subSlot: AnySubSlotKey) => J) => SlotMapOfType<J>;
type FlattenedSlotMap<T extends unknown> = {
    slot: PluginSlotKey;
    subSlot: AnySubSlotKey;
    data: T;
}[];
export declare const flattenSlotMap: <T extends unknown>(slotMap: SlotMapOfType<T>) => FlattenedSlotMap<T>;
export declare const forceFullSlotMap: <T extends unknown, J extends unknown>(slotMap: SlotMapOfType<T>, defaultValue?: J) => SlotMapOfType<T | J>;
export declare const generateSlotMapOfType: <T extends unknown>(cb: (slot: PluginSlotKey, subSlot: AnySubSlotKey) => T) => SlotMapOfType<T>;
export declare const getSlotMapData: <T extends PluginSlotKey>(parentSlot: T, subSlot: keyof (typeof fullSlotMap)[T]) => {
    snippets: {
        SnippetListPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddSnippetPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SnippetList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SnippetFilter: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    math: {
        EquationDetailsModalPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EquationsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EquationDetailsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddEquationPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    editor: {
        EditorModalPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MdxEditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        LatexEditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    UI: {
        ComponentDocsListPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        Pagination: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        logo: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        loadingIndicator: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        confirmationModal: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        ComponentDocumentationPageWrapper: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AutoSettingsTable: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AutoSettingFormModal: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SearchResultsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        BookmarksPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NotesSearchResultsList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteSummarySearchResult: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        DictionaryLetterList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        DictionaryPageItem: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteTypeSecondaryFilter: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteTypeSearchResultList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MdxNoteContainer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    bibliography: {
        BibliographyPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        BibEntryDetails: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    taskManager: {
        TaskManagerPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskDetails: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddTask: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddTaskList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskListSearchResultList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskListSearchResult: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    pdf: {
        FullPdf: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    navigation: {
        secondary: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteDetailSheet: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        navbar: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MultiPageSidebar: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        FullScreenNavigationMenu: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        Footer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    dashboard: {
        LandingPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    form: {
        SettingsPageContainer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    commandPalette: {
        commandPalette: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
}[T][keyof {
    snippets: {
        SnippetListPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddSnippetPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SnippetList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SnippetFilter: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    math: {
        EquationDetailsModalPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EquationsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EquationDetailsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddEquationPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    editor: {
        EditorModalPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MdxEditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        LatexEditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        EditorPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    UI: {
        ComponentDocsListPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        Pagination: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        logo: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        loadingIndicator: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        confirmationModal: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        ComponentDocumentationPageWrapper: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AutoSettingsTable: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AutoSettingFormModal: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        SearchResultsPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        BookmarksPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NotesSearchResultsList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteSummarySearchResult: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        DictionaryLetterList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        DictionaryPageItem: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteTypeSecondaryFilter: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteTypeSearchResultList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MdxNoteContainer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    bibliography: {
        BibliographyPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        BibEntryDetails: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    taskManager: {
        TaskManagerPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskDetails: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddTask: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        AddTaskList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskListSearchResultList: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        TaskListSearchResult: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    pdf: {
        FullPdf: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    navigation: {
        secondary: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        NoteDetailSheet: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        navbar: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        MultiPageSidebar: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        FullScreenNavigationMenu: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
        Footer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    dashboard: {
        LandingPage: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    form: {
        SettingsPageContainer: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
    commandPalette: {
        commandPalette: {
            path: string;
            clientOnly: boolean;
            inReduxProvider: boolean;
            type: string;
            propsExtends: string;
        };
    };
}[T]];
export {};
