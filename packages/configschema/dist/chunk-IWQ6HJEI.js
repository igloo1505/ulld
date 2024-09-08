import { z } from 'zod';

// src/developer/slotKeySchema.ts
var slotKeySchema = z.union([
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
  z.literal("commandPalette")
]);
var snippetsSubkeySchema = z.union([
  z.literal("SnippetListPage"),
  z.literal("AddSnippetPage"),
  z.literal("SnippetList"),
  z.literal("SnippetFilter")
]);
var mathSubkeySchema = z.union([
  z.literal("EquationDetailsModalPage"),
  z.literal("EquationsPage"),
  z.literal("EquationDetailsPage"),
  z.literal("AddEquationPage")
]);
var editorSubkeySchema = z.union([
  z.literal("EditorModalPage"),
  z.literal("MdxEditorPage"),
  z.literal("LatexEditorPage"),
  z.literal("EditorPage")
]);
var UISubkeySchema = z.union([
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
  z.literal("MdxNoteContainer")
]);
var bibliographySubkeySchema = z.union([
  z.literal("BibliographyPage"),
  z.literal("BibEntryDetails")
]);
var taskManagerSubkeySchema = z.union([
  z.literal("TaskManagerPage"),
  z.literal("TaskDetails"),
  z.literal("AddTask"),
  z.literal("AddTaskList"),
  z.literal("TaskListSearchResultList"),
  z.literal("TaskListSearchResult")
]);
var pdfSubkeySchema = z.literal("FullPdf");
var navigationSubkeySchema = z.union([
  z.literal("secondary"),
  z.literal("NoteDetailSheet"),
  z.literal("navbar"),
  z.literal("MultiPageSidebar"),
  z.literal("FullScreenNavigationMenu"),
  z.literal("Footer")
]);
var dashboardSubkeySchema = z.literal("LandingPage");
var formSubkeySchema = z.literal("SettingsPageContainer");
var commandPaletteSubkeySchema = z.literal("commandPalette");

export { UISubkeySchema, bibliographySubkeySchema, commandPaletteSubkeySchema, dashboardSubkeySchema, editorSubkeySchema, formSubkeySchema, mathSubkeySchema, navigationSubkeySchema, pdfSubkeySchema, slotKeySchema, snippetsSubkeySchema, taskManagerSubkeySchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-IWQ6HJEI.js.map