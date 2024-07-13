
import { z } from 'zod';


export const slotKeySchema = z.union([
    z.literal("snippets"),
    z.literal("equations"),
    z.literal("editor"),
    z.literal("bibliography"),
    z.literal("UI"),
    z.literal("task-manager"),
    z.literal("pdf"),
    z.literal("navigation"),
    z.literal("landing"),
    z.literal("commandPalette"),
])


export const snippetsSubkeySchema = z.union([
    z.literal("AddSnippetPage"),
    z.literal("SnippetList"),
    z.literal("SnippetFilter"),
])


export const equationsSubkeySchema = z.union([
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


export const bibliographySubkeySchema = z.union([
    z.literal("BibliographyPage"),
    z.literal("BibEntryDetails"),
])


export const UISubkeySchema = z.union([
    z.literal("Pagination"),
    z.literal("logo"),
    z.literal("loadingIndicator"),
    z.literal("confirmationModal"),
    z.literal("AutoSettingsTable"),
    z.literal("AutoSettingFormModal"),
    z.literal("SearchResultsPage"),
    z.literal("BookmarksPage"),
    z.literal("NotesSearchResultsList"),
    z.literal("NoteSummarySearchResult"),
    z.literal("DictionaryLetterList"),
    z.literal("DictionaryPageItem"),
])


export const task_managerSubkeySchema = z.union([
    z.literal("TaskManagerPage"),
    z.literal("TaskDetails"),
    z.literal("AddTask"),
    z.literal("AddTaskList"),
    z.literal("TaskListSearchResultList"),
    z.literal("TaskListSearchResult"),
])


export const pdfSubkeySchema = z.union([
    z.literal("FullPdf"),
    z.literal("EmbeddablePdf"),
])


export const navigationSubkeySchema = z.union([
    z.literal("secondary"),
    z.literal("navbar"),
    z.literal("MultiPageSidebar"),
    z.literal("FullScreenNavigationMenu"),
])


export const landingSubkeySchema = z.literal("LandingPage")


export const commandPaletteSubkeySchema = z.literal("commandPalette")

