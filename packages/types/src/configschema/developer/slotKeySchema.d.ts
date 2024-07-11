import { z } from 'zod';
export declare const slotKeySchema: z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"equations">, z.ZodLiteral<"editor">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"UI">, z.ZodLiteral<"task-manager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"landing">, z.ZodLiteral<"commandPalette">]>;
export declare const snippetsSubkeySchema: z.ZodUnion<[z.ZodLiteral<"AddSnippetPage">, z.ZodLiteral<"SnippetList">, z.ZodLiteral<"SnippetFilter">]>;
export declare const equationsSubkeySchema: z.ZodUnion<[z.ZodLiteral<"EquationDetailsModalPage">, z.ZodLiteral<"EquationsPage">, z.ZodLiteral<"EquationDetailsPage">, z.ZodLiteral<"AddEquationPage">]>;
export declare const editorSubkeySchema: z.ZodUnion<[z.ZodLiteral<"EditorModalPage">, z.ZodLiteral<"MdxEditorPage">, z.ZodLiteral<"LatexEditorPage">, z.ZodLiteral<"EditorPage">]>;
export declare const bibliographySubkeySchema: z.ZodLiteral<"BibliographyPage">;
export declare const UISubkeySchema: z.ZodUnion<[z.ZodLiteral<"Pagination">, z.ZodLiteral<"logo">, z.ZodLiteral<"confirmationModal">, z.ZodLiteral<"AutoSettingsTable">, z.ZodLiteral<"SearchResultsPage">, z.ZodLiteral<"BookmarksPage">, z.ZodLiteral<"TaskListSearchResultList">, z.ZodLiteral<"NotesSearchResultsList">, z.ZodLiteral<"TaskListSearchResult">, z.ZodLiteral<"NoteSummarySearchResult">, z.ZodLiteral<"DictionaryLetterList">, z.ZodLiteral<"DictionaryPageItem">]>;
export declare const task_managerSubkeySchema: z.ZodUnion<[z.ZodLiteral<"TaskManagerPage">, z.ZodLiteral<"TaskDetails">, z.ZodLiteral<"AddTask">, z.ZodLiteral<"AddTaskList">]>;
export declare const pdfSubkeySchema: z.ZodLiteral<"FullPdf">;
export declare const navigationSubkeySchema: z.ZodUnion<[z.ZodLiteral<"secondary">, z.ZodLiteral<"navbar">, z.ZodLiteral<"MultiPageSidebar">, z.ZodLiteral<"FullScreenNavigationMenu">]>;
export declare const landingSubkeySchema: z.ZodLiteral<"LandingPage">;
export declare const commandPaletteSubkeySchema: z.ZodLiteral<"commandPalette">;
//# sourceMappingURL=slotKeySchema.d.ts.map