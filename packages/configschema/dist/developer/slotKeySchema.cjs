'use strict';

var zod = require('zod');

// src/developer/slotKeySchema.ts
var slotKeySchema = zod.z.union([
  zod.z.literal("snippets"),
  zod.z.literal("math"),
  zod.z.literal("editor"),
  zod.z.literal("UI"),
  zod.z.literal("bibliography"),
  zod.z.literal("taskManager"),
  zod.z.literal("pdf"),
  zod.z.literal("navigation"),
  zod.z.literal("dashboard"),
  zod.z.literal("form"),
  zod.z.literal("commandPalette")
]);
var snippetsSubkeySchema = zod.z.union([
  zod.z.literal("SnippetListPage"),
  zod.z.literal("AddSnippetPage"),
  zod.z.literal("SnippetList"),
  zod.z.literal("SnippetFilter")
]);
var mathSubkeySchema = zod.z.union([
  zod.z.literal("EquationDetailsModalPage"),
  zod.z.literal("EquationsPage"),
  zod.z.literal("EquationDetailsPage"),
  zod.z.literal("AddEquationPage")
]);
var editorSubkeySchema = zod.z.union([
  zod.z.literal("EditorModalPage"),
  zod.z.literal("MdxEditorPage"),
  zod.z.literal("LatexEditorPage"),
  zod.z.literal("EditorPage")
]);
var UISubkeySchema = zod.z.union([
  zod.z.literal("ComponentDocsListPage"),
  zod.z.literal("Pagination"),
  zod.z.literal("logo"),
  zod.z.literal("loadingIndicator"),
  zod.z.literal("confirmationModal"),
  zod.z.literal("ComponentDocumentationPageWrapper"),
  zod.z.literal("AutoSettingsTable"),
  zod.z.literal("AutoSettingFormModal"),
  zod.z.literal("SearchResultsPage"),
  zod.z.literal("BookmarksPage"),
  zod.z.literal("NotesSearchResultsList"),
  zod.z.literal("NoteSummarySearchResult"),
  zod.z.literal("DictionaryLetterList"),
  zod.z.literal("DictionaryPageItem"),
  zod.z.literal("NoteTypeSecondaryFilter"),
  zod.z.literal("NoteTypeSearchResultList"),
  zod.z.literal("MdxNoteContainer")
]);
var bibliographySubkeySchema = zod.z.union([
  zod.z.literal("BibliographyPage"),
  zod.z.literal("BibEntryDetails")
]);
var taskManagerSubkeySchema = zod.z.union([
  zod.z.literal("TaskManagerPage"),
  zod.z.literal("TaskDetails"),
  zod.z.literal("AddTask"),
  zod.z.literal("AddTaskList"),
  zod.z.literal("TaskListSearchResultList"),
  zod.z.literal("TaskListSearchResult")
]);
var pdfSubkeySchema = zod.z.literal("FullPdf");
var navigationSubkeySchema = zod.z.union([
  zod.z.literal("secondary"),
  zod.z.literal("NoteDetailSheet"),
  zod.z.literal("navbar"),
  zod.z.literal("MultiPageSidebar"),
  zod.z.literal("FullScreenNavigationMenu"),
  zod.z.literal("Footer")
]);
var dashboardSubkeySchema = zod.z.literal("LandingPage");
var formSubkeySchema = zod.z.literal("SettingsPageContainer");
var commandPaletteSubkeySchema = zod.z.literal("commandPalette");

exports.UISubkeySchema = UISubkeySchema;
exports.bibliographySubkeySchema = bibliographySubkeySchema;
exports.commandPaletteSubkeySchema = commandPaletteSubkeySchema;
exports.dashboardSubkeySchema = dashboardSubkeySchema;
exports.editorSubkeySchema = editorSubkeySchema;
exports.formSubkeySchema = formSubkeySchema;
exports.mathSubkeySchema = mathSubkeySchema;
exports.navigationSubkeySchema = navigationSubkeySchema;
exports.pdfSubkeySchema = pdfSubkeySchema;
exports.slotKeySchema = slotKeySchema;
exports.snippetsSubkeySchema = snippetsSubkeySchema;
exports.taskManagerSubkeySchema = taskManagerSubkeySchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=slotKeySchema.cjs.map