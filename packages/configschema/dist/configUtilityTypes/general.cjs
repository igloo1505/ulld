'use strict';

var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');
var identity = require('@ulld/utilities/utils/identity');
var allIcons = require('@ulld/icons/names');
var general = require('@ulld/utilities/utils/general');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var allIcons__default = /*#__PURE__*/_interopDefault(allIcons);

// src/zod/documentConfigSchema.ts
zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return fsUtils.withForwardSlash(a);
  }
  return a;
};
var defaultResultLengths = {
  categories: 12,
  equations: 10,
  snippets: 10,
  searchAll: 12
};
var iconNameField = zod.z.enum(allIcons__default.default);
var linkLocationSchema = zod.z.union([
  zod.z.literal("sidebar"),
  zod.z.literal("navbar"),
  zod.z.literal("both"),
  zod.z.literal("none")
]);
zod.z.object({
  navbarBreakpoint: zod.z.object({
    full: zod.z.number().default(1024).describe(
      "Pixel width at which the navbar will display all of it's contents."
    ),
    minimal: zod.z.number().default(640).describe(
      "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
    )
  }).default({
    full: 1024,
    minimal: 640
  }),
  maxResultLength: zod.z.object({
    categories: zod.z.number().default(defaultResultLengths.categories),
    equations: zod.z.number().default(defaultResultLengths.equations),
    snippets: zod.z.number().default(defaultResultLengths.snippets),
    searchAll: zod.z.number().default(defaultResultLengths.searchAll)
  }).describe(
    "The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts."
  ).default(defaultResultLengths),
  bookmarkLink: linkLocationSchema.optional().default("navbar"),
  syncLink: linkLocationSchema.optional().default("sidebar"),
  fileSystemToggle: linkLocationSchema.optional(),
  darkmodeToggle: linkLocationSchema.optional().default("sidebar"),
  settings: linkLocationSchema.optional(),
  equationsLink: linkLocationSchema.optional(),
  snippetsLink: linkLocationSchema.optional().default("sidebar"),
  backupData: linkLocationSchema.optional(),
  navbarLinks: zod.z.union([
    zod.z.string().describe("A document type id"),
    zod.z.object({
      label: zod.z.string(),
      icon: iconNameField.optional(),
      href: zod.z.string().optional(),
      onClick: zod.z.function().optional()
    })
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  ),
  // RESUME: Come back and figure out this TS error.
  sidebarLinks: zod.z.union([
    zod.z.object({
      icon: iconNameField,
      href: zod.z.string().optional(),
      label: zod.z.string().optional(),
      Icon: zod.z.function().optional(),
      onClick: zod.z.function().optional()
    }),
    zod.z.string().describe("The id of the document type.")
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  )
}).default({});

// src/zod/documentConfigSchema.ts
var parsableSearchParam = zod.z.union([
  zod.z.string(),
  zod.z.string().array(),
  zod.z.number(),
  zod.z.number().array()
]);
var docTypeColorGroup = zod.z.object({
  bg: zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  ),
  fg: zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  )
});
var docTypeUISchema = zod.z.object({
  styles: zod.z.object({
    dark: docTypeColorGroup.default({}),
    light: docTypeColorGroup.default({})
    // combined_classes: z
    //     .string()
    //     .optional()
    //     .describe(
    //         "Css classes to be applied to elements related to this specific document type.",
    //     ),
  }).default({})
  // .transform((a) => {
  //     return {
  //         dark: a.dark,
  //         light: a.light,
  //         // combined_classes:
  //         //     a.combined_classes ||
  //         //     `${a.dark.bg || ""} ${a.dark.fg || ""} ${a.light.bg || ""} ${a.light.fg || ""}`,
  //     };
  // }),
}).default({});
var zodDocTypeInput = zod.z.string().transform(identity.makeValidIdOnlyLetters).brand("DocTypeName");
var documentTypeConfigSchemaBase = zod.z.object({
  id: zod.z.string().optional().describe("A unique key to be used internally to deal with this doctype."),
  docType: zodDocTypeInput.optional().describe(
    "A unique key which describes the nature of this document type: 'MathNote', 'Journal', 'References', etc..."
  ),
  filePathPattern: zod.z.string().optional().describe(
    "A glob style string to test a file path for this note type. Should return true if a given file is of this note type."
  ),
  matchWeight: zod.z.number().min(0).max(100).default(50).describe(
    "An extra weight between 0 and 100 to apply to matches. This can be very important when the location of one document type exists as a child of another, in which case an increased weight should be applied to the child document type. Default: 50"
  ),
  // contentType: documentConfigContentTypeSchema.default("mdx")
  fs: zod.z.string().describe(
    "The path to the root of the directory which holds this document type. This path must be both relative to the appConfig.fsRoot folder and a child of it. For example, a root directory at '/Users/steve/Desktop/notes' might have folders within it of /Users/steve/Desktop/notes/math and /Users/steve/Desktop/notes/physics. These appConfig.noteTypes[0].fs should be '/math' and the latter should be '/physics'."
  ).transform(fsUtils.withForwardSlash),
  url: zod.z.string().describe("The url at which this note should be displayed.").transform(zodWithForwardSlashTransform),
  urlQuery: zod.z.record(zod.z.string(), parsableSearchParam).optional().describe(
    "Url search paramters to be appended to generated buttons and links for this doc type in some cases. Useful for things like populating an initial list or opening with certain default override-able settings."
  ).default({}),
  keywords: zod.z.string().array().default([]).describe(
    "Keywords to help with search results and command sorting related to this document type."
  ),
  label: zod.z.string().describe(
    "The label to be used for this document type where automatically generated links, commands and buttons are referencing it."
  ),
  topicLabel: zod.z.string().optional().describe(
    "Replace references to the 'topic' tag with this label. This is useful for things like managing freelance work, where 'topics' might better be described as 'Jobs' or 'Clients'."
  ),
  subjectLabel: zod.z.string().optional().describe(
    "Replace references to the 'subject' tag with this label. This is useful for things like managing freelance work, where 'subjects' might better be described as 'Jobs' or 'Clients'."
  ),
  autoTag: zod.z.string().array().default([]).describe(
    "Automatically append these tags to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoTopic: zod.z.string().array().default([]).describe(
    "Automatically append these topics to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoSubject: zod.z.string().array().default([]).describe(
    "Automatically append these subjects to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  UI: docTypeUISchema.default({}),
  icon: iconNameField.default("ulld"),
  inSidebar: zod.z.boolean().default(false),
  inNavbar: zod.z.boolean().default(false)
});
var documentTypeConfigSchema = documentTypeConfigSchemaBase.partial({
  url: true
}).transform((a) => {
  const _id = identity.makeValidId(a.id || a.label);
  return {
    ...a,
    // docType: a.docType ||
    id: a.id || _id,
    url: a.url || `/${_id}`
  };
});
var nbConvertTemplateOptions = zod.z.union([
  zod.z.literal("lab"),
  zod.z.literal("classic"),
  zod.z.literal("reveal"),
  zod.z.string()
]);
zod.z.object({
  nbconvertPath: zod.z.string().optional().describe("The path to nbConvert. This option will likely be deprecated."),
  conversionTimeout: zod.z.number().default(300).describe("The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."),
  customConversionFunction: zod.z.object({
    pdf: zod.z.function().args(zod.z.string().describe("Path to the notebook"), zod.z.string().describe("Output directory")).returns(zod.z.string().describe("utf-8 encoded string"))
  }).partial().optional(),
  execute: zod.z.boolean().default(false).describe("Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."),
  nbConvertTemplate: nbConvertTemplateOptions.default("classic").describe("The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"),
  notebookOutputDir: zod.z.string().default("/generated").describe("The fsRoot relative file path where converted notebooks should be saved.")
});
var shikiThemeValidator = zod.z.union([
  zod.z.literal("andromeeda"),
  zod.z.literal("aurora-x"),
  zod.z.literal("ayu-dark"),
  zod.z.literal("catppuccin-frappe"),
  zod.z.literal("catppuccin-latte"),
  zod.z.literal("catppuccin-macchiato"),
  zod.z.literal("catppuccin-mocha"),
  zod.z.literal("dark-plus"),
  zod.z.literal("dracula"),
  zod.z.literal("dracula-soft"),
  zod.z.literal("github-dark"),
  zod.z.literal("github-dark-dimmed"),
  zod.z.literal("github-light"),
  zod.z.literal("light-plus"),
  zod.z.literal("material-theme"),
  zod.z.literal("material-theme-darker"),
  zod.z.literal("material-theme-lighter"),
  zod.z.literal("material-theme-ocean"),
  zod.z.literal("material-theme-palenight"),
  zod.z.literal("min-dark"),
  zod.z.literal("min-light"),
  zod.z.literal("monokai"),
  zod.z.literal("night-owl"),
  zod.z.literal("nord"),
  zod.z.literal("one-dark-pro"),
  zod.z.literal("poimandres"),
  zod.z.literal("red"),
  zod.z.literal("rose-pine"),
  zod.z.literal("rose-pine-dawn"),
  zod.z.literal("rose-pine-moon"),
  zod.z.literal("slack-dark"),
  zod.z.literal("slack-ochin"),
  zod.z.literal("solarized-dark"),
  zod.z.literal("solarized-light"),
  zod.z.literal("synthwave-84"),
  zod.z.literal("tokyo-night"),
  zod.z.literal("vesper"),
  zod.z.literal("vitesse-black"),
  zod.z.literal("vitesse-dark"),
  zod.z.literal("vitesse-light")
]);

// src/zod/searchParamOverrides/main.ts
var fields = {
  colab: zod.z.coerce.boolean(),
  kernel: zod.z.string(),
  nbgrader: zod.z.coerce.boolean(),
  nbReadOnly: zod.z.coerce.boolean(),
  nbConvertExec: zod.z.coerce.boolean(),
  nbConvertTemp: nbConvertTemplateOptions,
  shikiHlLight: shikiThemeValidator,
  shikiHlDark: shikiThemeValidator
};
zod.z.object(fields).partial();
zod.z.union([
  zod.z.literal(".mdx"),
  zod.z.literal(".md")
]);
var defaultParsableFileExtensions = zod.z.union([
  zod.z.literal(".mdx"),
  zod.z.literal(".md"),
  zod.z.literal(".ipynb")
]);
var parsableFileExtensions = zod.z.union([
  zod.z.literal(".csv"),
  zod.z.literal(".tsv"),
  zod.z.literal(".excel"),
  zod.z.literal(".numpy"),
  zod.z.literal(".html"),
  zod.z.literal(".pickle"),
  zod.z.literal(".db"),
  zod.z.literal(".sql"),
  zod.z.literal(".pdf"),
  zod.z.literal(".json"),
  zod.z.literal(".tex"),
  zod.z.literal(".hdf5")
]);
zod.z.union([
  defaultParsableFileExtensions,
  parsableFileExtensions
]);
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = general.replaceRecursively(k, /\./gmi, "");
  }
  return ext;
};

// src/zod/getInternalConfig.ts
var getInternalConfig = (appConfig, searchParams) => {
  const xConfig = {
    parsableExtensions: [".mdx"],
    filetypeSpecificAppendices: getFileTypeAppendices([".mdx"]),
    // internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "gif"
      ]
    }
  };
  {
    return {
      ...xConfig
    };
  }
};

// src/configUtilityTypes/general.ts
var getDocumentTypeConfig = (docType, config) => {
  const _config = config || getInternalConfig();
  let dt = typeof docType === "string" ? docType : docType.docType;
  return _config.noteTypes?.find((f) => f.docType === dt);
};
var getNoteTypeFromPath = (rootRelativePath, config) => {
  if (!rootRelativePath)
    return "RemoteNote";
  const _config = config || getInternalConfig();
  let nts = _config.noteTypes?.filter(
    (n) => Boolean(n.fs && rootRelativePath.includes(n.fs))
  );
  let nt = nts.filter((f) => typeof f.fs !== "undefined").sort((a, b) => b.fs?.length - a.fs?.length)?.[0];
  return nt ? documentTypeConfigSchema.parse(nt) : void 0;
};
var getRootRelativePath = (slug, docType, config) => {
  const _config = config || getInternalConfig();
  return `${_config.noteTypes?.find((t) => t.docType === docType)?.fs}/${slug}`;
};

exports.getDocumentTypeConfig = getDocumentTypeConfig;
exports.getNoteTypeFromPath = getNoteTypeFromPath;
exports.getRootRelativePath = getRootRelativePath;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=general.cjs.map