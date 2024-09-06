import { z } from 'zod';


export const slotKeySchema = z.union([
    z.literal("snippets"),
    z.literal("math"),
    z.literal("editor"),
    z.literal("UI"),
    z.literal("bibliography"),
    z.literal("taskManager"),
    z.literal("pdf"),
    z.literal("navigation"),
    z.literal("dashboard"),
    z.literal("form"),
    z.literal("commandPalette"),
])


export const snippetsSubkeySchema = z.union([
    z.literal("SnippetListPage"),
    z.literal("AddSnippetPage"),
    z.literal("SnippetList"),
    z.literal("SnippetFilter"),
])


export const mathSubkeySchema = z.union([
    z.literal("EquationDetailsModalPage"),
    z.literal("EquationsPage"),
    z.literal("EquationDetailsPage"),
    z.literal("AddEquationPage"),
])


export const editorSubkeySchema = z.union([
    z.literal("EditorModalPage"),
    z.literal("MdxEditorPage"),
    z.literal("LatexEditorPage"),
    z.literal("EditorPage"),
])


export const UISubkeySchema = z.union([
    z.literal("ComponentDocsListPage"),
    z.literal("Pagination"),
    z.literal("logo"),
    z.literal("loadingIndicator"),
    z.literal("confirmationModal"),
    z.literal("ComponentDocumentationPageWrapper"),
    z.literal("AutoSettingsTable"),
    z.literal("AutoSettingFormModal"),
    z.literal("SearchResultsPage"),
    z.literal("BookmarksPage"),
    z.literal("NotesSearchResultsList"),
    z.literal("NoteSummarySearchResult"),
    z.literal("DictionaryLetterList"),
    z.literal("DictionaryPageItem"),
    z.literal("NoteTypeSecondaryFilter"),
    z.literal("NoteTypeSearchResultList"),
    z.literal("MdxNoteContainer"),
])


export const bibliographySubkeySchema = z.union([
    z.literal("BibliographyPage"),
    z.literal("BibEntryDetails"),
])


export const taskManagerSubkeySchema = z.union([
    z.literal("TaskManagerPage"),
    z.literal("TaskDetails"),
    z.literal("AddTask"),
    z.literal("AddTaskList"),
    z.literal("TaskListSearchResultList"),
    z.literal("TaskListSearchResult"),
])


export const pdfSubkeySchema = z.literal("FullPdf")


export const navigationSubkeySchema = z.union([
    z.literal("secondary"),
    z.literal("NoteDetailSheet"),
    z.literal("navbar"),
    z.literal("MultiPageSidebar"),
    z.literal("FullScreenNavigationMenu"),
    z.literal("Footer"),
])


export const dashboardSubkeySchema = z.literal("LandingPage")


export const formSubkeySchema = z.literal("SettingsPageContainer")


export const commandPaletteSubkeySchema = z.literal("commandPalette")

