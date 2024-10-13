"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/slotKeySchema.ts
var _zod = require('zod');
var slotKeySchema = _zod.z.union([
  _zod.z.literal("snippets"),
  _zod.z.literal("math"),
  _zod.z.literal("editor"),
  _zod.z.literal("UI"),
  _zod.z.literal("bibliography"),
  _zod.z.literal("taskManager"),
  _zod.z.literal("pdf"),
  _zod.z.literal("navigation"),
  _zod.z.literal("dashboard"),
  _zod.z.literal("form"),
  _zod.z.literal("commandPalette")
]);
var snippetsSubkeySchema = _zod.z.union([
  _zod.z.literal("SnippetListPage"),
  _zod.z.literal("AddSnippetPage"),
  _zod.z.literal("SnippetList"),
  _zod.z.literal("SnippetFilter")
]);
var mathSubkeySchema = _zod.z.union([
  _zod.z.literal("EquationDetailsModalPage"),
  _zod.z.literal("EquationsPage"),
  _zod.z.literal("EquationDetailsPage"),
  _zod.z.literal("AddEquationPage")
]);
var editorSubkeySchema = _zod.z.union([
  _zod.z.literal("EditorModalPage"),
  _zod.z.literal("MdxEditorPage"),
  _zod.z.literal("LatexEditorPage"),
  _zod.z.literal("EditorPage")
]);
var UISubkeySchema = _zod.z.union([
  _zod.z.literal("ComponentDocsListPage"),
  _zod.z.literal("Pagination"),
  _zod.z.literal("logo"),
  _zod.z.literal("loadingIndicator"),
  _zod.z.literal("confirmationModal"),
  _zod.z.literal("ComponentDocumentationPageWrapper"),
  _zod.z.literal("AutoSettingsTable"),
  _zod.z.literal("AutoSettingFormModal"),
  _zod.z.literal("SearchResultsPage"),
  _zod.z.literal("BookmarksPage"),
  _zod.z.literal("NotesSearchResultsList"),
  _zod.z.literal("NoteSummarySearchResult"),
  _zod.z.literal("DictionaryLetterList"),
  _zod.z.literal("DictionaryPageItem"),
  _zod.z.literal("NoteTypeSecondaryFilter"),
  _zod.z.literal("NoteTypeSearchResultList"),
  _zod.z.literal("MdxNoteContainer")
]);
var bibliographySubkeySchema = _zod.z.union([
  _zod.z.literal("BibliographyPage"),
  _zod.z.literal("BibEntryDetails")
]);
var taskManagerSubkeySchema = _zod.z.union([
  _zod.z.literal("TaskManagerPage"),
  _zod.z.literal("TaskDetails"),
  _zod.z.literal("AddTask"),
  _zod.z.literal("AddTaskList"),
  _zod.z.literal("TaskListSearchResultList"),
  _zod.z.literal("TaskListSearchResult")
]);
var pdfSubkeySchema = _zod.z.literal("FullPdf");
var navigationSubkeySchema = _zod.z.union([
  _zod.z.literal("secondary"),
  _zod.z.literal("NoteDetailSheet"),
  _zod.z.literal("navbar"),
  _zod.z.literal("MultiPageSidebar"),
  _zod.z.literal("FullScreenNavigationMenu"),
  _zod.z.literal("Footer")
]);
var dashboardSubkeySchema = _zod.z.literal("LandingPage");
var formSubkeySchema = _zod.z.literal("SettingsPageContainer");
var commandPaletteSubkeySchema = _zod.z.literal("commandPalette");














exports.slotKeySchema = slotKeySchema; exports.snippetsSubkeySchema = snippetsSubkeySchema; exports.mathSubkeySchema = mathSubkeySchema; exports.editorSubkeySchema = editorSubkeySchema; exports.UISubkeySchema = UISubkeySchema; exports.bibliographySubkeySchema = bibliographySubkeySchema; exports.taskManagerSubkeySchema = taskManagerSubkeySchema; exports.pdfSubkeySchema = pdfSubkeySchema; exports.navigationSubkeySchema = navigationSubkeySchema; exports.dashboardSubkeySchema = dashboardSubkeySchema; exports.formSubkeySchema = formSubkeySchema; exports.commandPaletteSubkeySchema = commandPaletteSubkeySchema;
//# sourceMappingURL=chunk-LT3FMETM.cjs.map