'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');
var crypto = require('crypto');

// src/developer/main.ts
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
var componentConfigSchema = zod.z.object({
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
var parserKeyList = ["mdx"];
var parserExtensionSchema = zod.z.object({
  export: zod.z.string().describe(
    "The export in your package.json that exports the parser function. The parsing function must be the file's default export."
  ).transform(transformExportString.transformExportString),
  conditions: zod.z.object({
    frontMatter: zod.z.string().optional()
  }).default({})
});
var pluginParserMap = zod.z.object({
  mdx: parserExtensionSchema.optional()
});
var pluginSettingsSchema = zod.z.object({
  settingPageExport: zod.z.string().describe(
    "Export of a page that will be included in the user's settings page in it's own tab."
  ).transform(transformExportString.transformExportString),
  onSettingsSave: zod.z.string().describe(
    "The export of a function that handles the saving of your settings specific to your plugin, most likely using the DJT model."
  ),
  title: zod.z.string().optional().describe("The label applied to the tab of the user's setting page for this plugins settings. Defaults to the developerConfigSchema.pluginName property."),
  subtitle: zod.z.string().optional()
});
var pluginAdditionalPageSchema = zod.z.object({
  targetUrl: zod.z.string().optional().describe("The target URL to place this page at. This is synonomous with a file path from the root of the app directory, including intercepted routes. An intercepted modal route for example should appear as `@modal/(.)myPath/...` even though `@modal` doesn't appear in the URL. This must be unique, as if it overwrites an existing route it will not be applied.").transform((f) => {
    if (!f)
      return void 0;
    let _f = f;
    if (_f.endsWith("page.tsx")) {
      _f = _f.slice(0, _f.lastIndexOf("/"));
    }
    if (_f.startsWith("/")) {
      _f = _f.slice(1);
    }
    if (_f.endsWith("/")) {
      _f = _f.slice(0, _f.length - 1);
    }
    return _f;
  }),
  slot: zod.z.string().optional().describe("The optional slot key that matches a corresponding slot of type page."),
  export: zod.z.string().describe("The export in your package.json that matches a single component that will act as this page. The component must be the default export, and will be passed all props that the page receives, like params and searchParams. This can include intercepted modal routes with the @modal/(.)... syntax, nested routes and parameter based routes with the [someParam] syntax.").transform(transformExportString.transformExportString),
  exportsPageProps: zod.z.boolean().default(false).describe("Whether or not the file at the export field exports a type named PageProps to apply to the parent page properties. This type should include a params property and/or a searchParams property as they apply to the page itself. This is mostly for the sake of completeness, but can help other developers to work in a bug free environment if they choose to extend their own app.")
});
var pluginEventsSchema = zod.z.object({
  onBuild: zod.z.string().optional().describe("The package.json export of a function that will run once during the build process. This can be used for copying files over to the public directory, but most other copying of files can be handled by setting up the pluginConfig appropriately.").transform(transformExportString.transformExportStringOptional),
  onSync: zod.z.string().optional().describe("The package.json export of a function that will run each time a user syncs their notes with their database.").transform(transformExportString.transformExportStringOptional),
  onBackup: zod.z.string().optional().describe("The package.json export of a function that will run each time a user backs up their notes to a json file. This function should return a single json object.").transform(transformExportString.transformExportStringOptional),
  onRestore: zod.z.string().optional().describe("The package.json export of a function that will be used to restore data from a previous backup. The argument will be an optional object of an identical type to what was stored using the onBackup event.").transform(transformExportString.transformExportStringOptional)
});
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
var trpcConfigSchema = zod.z.object({
  routerName: zod.z.string(),
  routerExport: zod.z.string().describe(
    "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property."
  )
});
var additionalImportsConfigSchema = zod.z.object({
  root: zod.z.string().array().default([]).describe(
    "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json"
  ).transform(transformExportString.transformExportStringArray),
  mdx: zod.z.string().array().default([]).describe(
    "Similar to additionalImports.root, but only applied to pages with rendered mdx content."
  ).transform(transformExportString.transformExportStringArray)
});
var navigationLinkCategory = zod.z.union([
  zod.z.literal("math"),
  zod.z.literal("snippets"),
  zod.z.literal("code"),
  zod.z.literal("AI"),
  zod.z.literal("ML"),
  zod.z.literal("writing"),
  zod.z.literal("search"),
  zod.z.literal("notebooks"),
  zod.z.literal("database"),
  zod.z.literal("work"),
  zod.z.literal("school"),
  zod.z.literal("organization"),
  zod.z.literal("task-management"),
  zod.z.literal("academic"),
  zod.z.literal("research"),
  zod.z.literal("project-planning"),
  zod.z.literal("calendar"),
  zod.z.literal("general")
]);

// src/developer/navigationLink.ts
var navigationLinkSchema = zod.z.object({
  label: zod.z.string(),
  href: zod.z.string(),
  icon: zod.z.string().optional(),
  pluginName: zod.z.string().optional(),
  category: navigationLinkCategory.default("general")
});
var itemBase = zod.z.object({
  label: zod.z.string(),
  isAvailable: zod.z.function().returns(zod.z.boolean())
  // Should receive props related to the path name, the front matter of the note and possibly other properties to determine if it should be displayed, and be called once when the list containing that item is first displayed.
});
var pluginCommandPaletteSchema = zod.z.union([
  itemBase.extend({ action: zod.z.function() }),
  itemBase.extend({
    href: zod.z.union([zod.z.string(), zod.z.function().returns(zod.z.string())])
  })
]).array();
var tailwindPluginConfig = zod.z.object({});
var defaultPluginId = "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";
var _developerConfigSchema = zod.z.object({
  pluginName: zod.z.string(),
  label: zod.z.string().describe(
    "For display purposes. Does not need to match npm the way pluginName does."
  ),
  pluginId: zod.z.string().default(defaultPluginId),
  slot: slotKeySchema.optional(),
  components: componentConfigSchema.array().default([]),
  parsers: pluginParserMap.default({}),
  additionalImports: additionalImportsConfigSchema.optional(),
  trpc: trpcConfigSchema.optional(),
  settings: pluginSettingsSchema.optional(),
  pages: pluginAdditionalPageSchema.array().default([]),
  events: pluginEventsSchema.default({}),
  navigationLinks: navigationLinkSchema.array().default([]),
  commandPalette: pluginCommandPaletteSchema.default([]),
  tailwind: tailwindPluginConfig.default({}),
  documentation: zod.z.string().optional().describe("An optional export of an mdx file that describes the use of your plugin.").transform(transformExportString.transformExportStringOptional),
  styles: zod.z.object({
    root: zod.z.string().optional().describe("Optional export of a scss file that should be imported to all pages."),
    mdx: zod.z.string().optional().describe("Optional export of a scss file that should be imported to pages with mdx content only.")
  }).default({})
});
var developerConfigSchema = _developerConfigSchema.transform(
  (data) => {
    if (data.settings && !data.settings.title) {
      data.settings.title = data.pluginName;
    }
    return data;
  }
);
var internalBuildDeveloperConfigSchema = _developerConfigSchema.extend(
  {
    pluginId: zod.z.string().refine((s) => s !== defaultPluginId)
  }
);

exports._developerConfigSchema = _developerConfigSchema;
exports.defaultPluginId = defaultPluginId;
exports.developerConfigSchema = developerConfigSchema;
exports.internalBuildDeveloperConfigSchema = internalBuildDeveloperConfigSchema;
exports.parserKeyList = parserKeyList;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map