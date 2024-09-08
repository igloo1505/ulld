'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');
var crypto = require('crypto');

// src/baseApp/slot.tsx
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
zod.z.union([
  zod.z.literal("SnippetListPage"),
  zod.z.literal("AddSnippetPage"),
  zod.z.literal("SnippetList"),
  zod.z.literal("SnippetFilter")
]);
zod.z.union([
  zod.z.literal("EquationDetailsModalPage"),
  zod.z.literal("EquationsPage"),
  zod.z.literal("EquationDetailsPage"),
  zod.z.literal("AddEquationPage")
]);
zod.z.union([
  zod.z.literal("EditorModalPage"),
  zod.z.literal("MdxEditorPage"),
  zod.z.literal("LatexEditorPage"),
  zod.z.literal("EditorPage")
]);
zod.z.union([
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
zod.z.union([
  zod.z.literal("BibliographyPage"),
  zod.z.literal("BibEntryDetails")
]);
zod.z.union([
  zod.z.literal("TaskManagerPage"),
  zod.z.literal("TaskDetails"),
  zod.z.literal("AddTask"),
  zod.z.literal("AddTaskList"),
  zod.z.literal("TaskListSearchResultList"),
  zod.z.literal("TaskListSearchResult")
]);
zod.z.literal("FullPdf");
zod.z.union([
  zod.z.literal("secondary"),
  zod.z.literal("NoteDetailSheet"),
  zod.z.literal("navbar"),
  zod.z.literal("MultiPageSidebar"),
  zod.z.literal("FullScreenNavigationMenu"),
  zod.z.literal("Footer")
]);
zod.z.literal("LandingPage");
zod.z.literal("SettingsPageContainer");
zod.z.literal("commandPalette");
var defaultUUID = crypto.randomUUID();
var embeddableConfigSchema = zod.z.object({
  regexToInclude: zod.z.string().describe(
    "String passed to new RegExp(<regexToInclude>) to determine if a component should be imported. The raw content of a mdx file will be tested using this regex, and imported if a match is found. Due to the nature of jsx, 99% of the time, the componentName property can be used with a prefix of < to give '<MyComponentName'"
  ),
  label: zod.z.string().optional().describe(
    "An object key that matches your regex. 99% of the time, this will just be the regexToInclude property without the leading '<'. It will default to that, but if your regexToInclude property is more specific and includes other special characters, you should provide this label yourself."
  )
}).transform((a) => {
  return {
    ...a,
    label: a.label || a.regexToInclude.replaceAll(/\<|\\|\>/gm, "")
  };
});
zod.z.object({
  componentName: zod.z.string().describe("Must start with a capital letter.").transform((f) => `${f[0].toUpperCase()}${f.slice(1)}`),
  tags: zod.z.string().array().describe(
    "Help user's find your component both before they install it, and while searching for documentation."
  ).default([]),
  slot: zod.z.string().optional().describe(
    "This only applys if the component is meant to override an existing slot. All 'slots' in the appConfigSchema exported from @ulld/configschema/main/zod at the slots key will have an accompanying 'subslot' schema exported from @ulld/configschema/subslots/<name of that slot>. This schema will be a record of a specific set of keys unique to that slot, and a path to a component. All of these paths are initially populated by internally developed components, but can be overridden if your plugin defines the initial slot at the developerConfigSchema.slot path, and then overrides one or more subslots unique to that slot. This componentConfigSchema.slot path will be that subslot if it applies. Most components that are embedded in a user's notes, and don't modify the app as a whole do not occupy slots."
  ),
  export: zod.z.string().describe(
    "The path that this component is exported as in your package.json."
  ).transform(transformExportString.transformExportString),
  embeddable: zod.z.union([embeddableConfigSchema.array(), embeddableConfigSchema]).optional().transform(
    (val) => !val ? void 0 : Array.isArray(val) ? val : [val]
  ).describe(
    "This can be an array to apply aliases to the same component. The component won't be imported twice."
  ),
  exportedPropsName: zod.z.string().optional(),
  docsExport: zod.z.string().optional().describe(
    "The package.json export that points to a .md or .mdx file that provides a quick reference for the component. This should be simple enough to be opened in the command palette in split view. If only docsExport or fullDocsExport is provided, this shorter docsExport is heavily preferred."
  ),
  fullDocsExport: zod.z.string().optional().describe(
    "Similar to docsExport, but will be shown when users redirect to an entire page. This markdown can be more complex and include examples, but the components used must only consist of core ULLD components and your plugin, since we don't know what plugins other user's will be using."
  ),
  componentId: zod.z.string().uuid("Your component id must be a UUID string.").default(defaultUUID)
});

// src/baseApp/slot.tsx
var baseAppSlot = zod.z.object({
  parentSlot: slotKeySchema,
  subSlot: zod.z.string(),
  path: zod.z.string(),
  clientOnly: zod.z.boolean().default(false),
  type: zod.z.union([
    zod.z.literal("page"),
    zod.z.literal("component"),
    zod.z.literal("embeddable")
  ]),
  propsExtends: zod.z.string().optional(),
  embeddables: zod.z.union([embeddableConfigSchema, embeddableConfigSchema.array()]).transform((a) => Array.isArray(a) ? a : [a])
});

exports.baseAppSlot = baseAppSlot;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=slot.cjs.map