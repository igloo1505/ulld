'use strict';

var zod = require('zod');
var globToRegExp = require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');
var identity = require('@ulld/utilities/utils/identity');
var allIcons = require('@ulld/icons/names');
var shikiLanguages = require('@ulld/utilities/shikiLanguages');
var convertColorString = require('@ulld/utilities/convertColorString');
var themeUtils = require('@ulld/tailwind/themeUtils');
var general = require('@ulld/utilities/utils/general');
var slotsSchema = require('@ulld/configschema/slotsSchema');
var fsUtils$1 = require('@ulld/utilities/fsUtils');
var staticBuildData = require('@ulld/utilities/buildStaticData.json');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var globToRegExp__default = /*#__PURE__*/_interopDefault(globToRegExp);
var allIcons__default = /*#__PURE__*/_interopDefault(allIcons);
var shikiLanguages__default = /*#__PURE__*/_interopDefault(shikiLanguages);
var staticBuildData__default = /*#__PURE__*/_interopDefault(staticBuildData);

// src/zod/secondaryConfigParse/main.ts
var performanceConfigSchema = zod.z.object({
  latexParsingDebounceTimeout: zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
  mdxParsingDebounceTimeout: zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({});
var logLevelSchema = zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodPathGlobTransform = (a) => {
  if (typeof a === "string") {
    return {
      original: a,
      regex: globToRegExp__default.default(a, { extended: true, globstar: true })
    };
  }
  return {
    original: a.source,
    regex: a
  };
};
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return fsUtils.withForwardSlash(a);
  }
  return a;
};
var zodPathStringField = (desc, optional) => desc ? optional ? zod.z.string().optional().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : optional ? zod.z.string().optional().transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().transform((a) => a && fsUtils.withForwardSlash(a));

// src/zod/terminalConfig.ts
var terminalConfigSchema = zod.z.object({
  logLevel: logLevelSchema.default("info")
}).default({});
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
var navigationConfigSchema = zod.z.object({
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
var defaultDateFormatConfig = {
  short: "MM/DD/YYYY",
  long: "MMM Do, YYYY",
  withTime: "MM/DD/YY [at] HH:mm a",
  timeOnly: "HH:mm a"
};
var defaultDateParseType = "summarized";
var timeDisplayTypeSchema = zod.z.union([
  zod.z.literal("analog").describe("Similar to a digital clock."),
  zod.z.literal("summarized").describe("A short but more natural description of time. This requires the dateParseFormat.enableAdvancedFormat option."),
  zod.z.literal("descriptive").describe(`Time with relative times. ie: '2 days ago', 'tomorrow', etc. This requires the dateParseFormat.enableAdvancedFormat option. Default: ${defaultDateParseType}.`)
]);
var fullDateParseConfig = zod.z.object({
  short: zod.z.string().default("MM/D/YYYY").describe("The format string passed to dayjs to format dates for short or small display fields. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  long: zod.z.string().default("MMM Do, YYYY").describe("The format string passed to dayjs to format dates for display fields where size is less of a concern. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  withTime: zod.z.string().default("MM/DD/YY [at] HH:mm a").describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  timeOnly: zod.z.string().default("HH:mm a").describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin.")
});
var dateParseConfigSchema = zod.z.object({
  enableAdvancedFormat: zod.z.boolean().default(true).describe("Whether or not to enable format strings that follow the syntax described by dayjs's advancedFormat plugin."),
  format: zod.z.union([
    zod.z.string().describe("The string to pass to "),
    fullDateParseConfig
  ]).default(defaultDateFormatConfig),
  defaultTimeDisplayType: timeDisplayTypeSchema.default(defaultDateParseType),
  defaultTimeZone: zod.z.string().optional().describe("The time to be used to override the value found locally. In most cases this should be left empty to allow the timezone to be derived naturally, but in cases of some mangaged devices this may not be accurate. To see the timezone that your browser would provide, open the developer console and type 'Intl.DateTimeFormat().resolvedOptions().timeZone'. If that property does not match what is expected, set this value accordingly.")
}).default({
  enableAdvancedFormat: true,
  format: defaultDateFormatConfig,
  defaultTimeDisplayType: "analog"
});
var monacoSupportedLanguage = zod.z.string();
var monacoEditorConfigSchema = zod.z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: zod.z.boolean().default(false)
}).default({});
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
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var code_config_schema = zod.z.object({
  theme: zod.z.object({
    dark: shikiThemeValidator.default(defaultThemes.dark).describe(
      "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
    ),
    light: shikiThemeValidator.default(defaultThemes.light).describe(
      "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
    )
  }).default({
    dark: "dracula",
    light: "material-theme-lighter"
  }),
  editor: monacoEditorConfigSchema,
  syntaxHighlighting: zod.z.object({
    transformers: zod.z.object({
      regexHighlight: zod.z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
      lineHighlight: zod.z.boolean().describe("shiki#transformerMetaHighlight").default(true),
      lineFocus: zod.z.boolean().describe("shiki#transformerNotationFocus").default(false),
      lineErrorLevel: zod.z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
      lineDiff: zod.z.boolean().describe("shiki#transformerNotationDiff").default(false)
    }).default({}),
    defaultLanguage: zod.z.enum(shikiLanguages__default.default).or(
      zod.z.object({
        inline: zod.z.enum(shikiLanguages__default.default),
        block: zod.z.enum(shikiLanguages__default.default)
      })
    ).default({
      inline: "zsh",
      block: "python"
    }).transform((x) => {
      return typeof x === "string" ? {
        block: x,
        inline: x
      } : x;
    })
  }).default({})
});
var codeConfigSchema = code_config_schema.default({});
var codeConfigSchemaOutput = code_config_schema.required({
  editor: true
});
var tableUIConfigSchema = zod.z.object({
  maxHeight: zod.z.union([zod.z.string(), zod.z.number()]).default(300).describe("The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels.").transform((a) => typeof a === "number" ? `${a}px` : a)
}).default({});
var fontWeightSchema = zod.z.union([
  zod.z.literal("100"),
  zod.z.literal("200"),
  zod.z.literal("300"),
  zod.z.literal("400"),
  zod.z.literal("500"),
  zod.z.literal("600"),
  zod.z.literal("700"),
  zod.z.literal("800"),
  zod.z.literal("900")
]);
var fontStyleSchema = zod.z.union([
  zod.z.literal("italic"),
  zod.z.literal("bold"),
  zod.z.literal("normal")
]);
var fontConfigSchema = zod.z.object({
  path: zod.z.string().describe("Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."),
  weight: fontWeightSchema,
  style: fontStyleSchema
});
var textConfigSchema = zod.z.object({
  blockQuoteItalic: zod.z.boolean().default(false).describe("Whether or not to italicize block quote text."),
  fontPaths: zod.z.union([
    fontConfigSchema.array(),
    zod.z.literal("default")
    // change this to accept multiple fonts as a string and automate the layout file write accordingly.
  ]).default("default").describe("An array of font config objects to be bundled during the build.")
}).default({});
var mediaConfigSchema = zod.z.object({
  imageMap: zod.z.record(zod.z.string().describe("An alias to more easily embed this image throughout your notes."), zodPathStringField("The fsRoot relative path at which this image can be found.")).default({}),
  includeDefaultImageMap: zod.z.boolean().default(true).describe("Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."),
  imageRemoteTest: zod.z.instanceof(RegExp).array().default([])
}).default({});

// src/zod/ui/defaultColorMap.ts
var defaultUlldColorMap = {
  success: "#16a34a",
  info: "#0284c7",
  error: "#dc2626",
  sky: "#07c8f9",
  yellow: "#ffff24",
  blue: "#00a1e4",
  orange: "#ff7d00",
  green: "#89fc00",
  red: "#ff0000",
  purple: "#9908ff",
  pink: "#dc0073",
  amber: {
    dark: "#f59e0b",
    light: "#d97706"
  },
  lime: {
    dark: "#84cc16",
    light: "#65a30d"
  },
  emerald: {
    dark: "#10b981",
    light: "#059669"
  },
  teal: {
    dark: "#14b8a6",
    light: "#0d9488"
  },
  cyan: {
    dark: "#06b6d4",
    light: "#0891b2"
  },
  indigo: {
    dark: "#6366f1",
    light: "#4f46e5"
  },
  fuchsia: {
    dark: "#d946ef",
    light: "#c026d3"
  },
  rose: {
    dark: "#f43f5e",
    light: "#e11d48"
  },
  slate: {
    dark: "#64748b",
    light: "#475569"
  },
  gray: {
    dark: "#6b7280",
    light: "#4b5563"
  },
  stone: {
    dark: "#78716c",
    light: "#57534e"
  },
  zinc: {
    dark: "#71717a",
    light: "#52525b"
  },
  warning: "#eab308",
  alert: "#3b82f6",
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))"
};
var colorTransformOptional = (val) => val ? convertColorString.convertColorString(val) : void 0;
var colorGroup = zod.z.object({
  dark: zod.z.string().optional().transform(colorTransformOptional),
  light: zod.z.string().optional().transform(colorTransformOptional)
});
var colorValue = zod.z.union([
  colorGroup,
  zod.z.string().transform((c) => convertColorString.convertColorString(c, "hsl"))
]).nullish().transform((a) => {
  if (!a)
    return void 0;
  if (typeof a === "string") {
    return {
      dark: a,
      light: a
    };
  }
  if (!("dark" in a)) {
    return {
      dark: a.light,
      light: a.light
    };
  }
  return a;
});
zod.z.union([
  zod.z.literal("red"),
  zod.z.literal("orange"),
  zod.z.literal("amber"),
  zod.z.literal("yellow"),
  zod.z.literal("lime"),
  zod.z.literal("green"),
  zod.z.literal("emerald"),
  zod.z.literal("teal"),
  zod.z.literal("cyan"),
  zod.z.literal("sky"),
  zod.z.literal("blue"),
  zod.z.literal("indigo"),
  zod.z.literal("purple"),
  zod.z.literal("fuchsia"),
  zod.z.literal("pink"),
  zod.z.literal("rose"),
  zod.z.literal("slate"),
  zod.z.literal("gray"),
  zod.z.literal("stone"),
  zod.z.literal("zinc"),
  zod.z.literal("info"),
  zod.z.literal("error"),
  zod.z.literal("warning"),
  zod.z.literal("alert"),
  zod.z.literal("success"),
  zod.z.literal("primary"),
  zod.z.literal("secondary"),
  zod.z.literal("success")
]);
var colorsConfigSchema = zod.z.record(zod.z.string(), colorValue).default(defaultUlldColorMap);
var mainUIConfigSchema = zod.z.object({
  table: tableUIConfigSchema,
  text: textConfigSchema,
  media: mediaConfigSchema,
  colors: colorsConfigSchema,
  theme: themeUtils.themeSchema.default("ulld"),
  autoApplyMdxTitles: zod.z.boolean().default(true)
}).default({});
var databaseConfigSchema = zod.z.object({
  storeFormatted: zod.z.boolean().default(true).describe("Whether or not to store the formatted content along with the raw content This will improve performance and load times when rendering content  not in 'preferFs' mode, but will increase the storage size of each note. Recommended: true if running and storing notes locally where network speeds and monthly fees aren't an issue."),
  removeIfNotPresentInFs: zod.z.boolean().default(true).describe("Whether or not to remove notes from the database if they are no longer found in the local file system. This is best set to true if storing all notes in one location, but can be set to false to avoid losing notes that may have been lost elsewhere.")
}).default({});
var mathConfigSchema = zod.z.object({
  latexPackages: zod.z.union([zod.z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), zod.z.literal("all")]).default("all"),
  latexFontUrl: zodPathStringField("URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: zod.z.record(zod.z.string(), zod.z.number()).default({})
}).default({});
var serverUrlSchema = zod.z.object({
  baseUrl: zod.z.string().url().optional().describe("The url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance."),
  wsUrl: zod.z.string().url().optional().describe("The websocket url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance.")
});
var jupyter_rect_config_schema = zod.z.object({
  collaborative: zod.z.boolean().default(false).describe("Whether the notebook is collaborative or not. This can also be set as needed by using the search param ?colab=true"),
  lite: zod.z.boolean().default(false).describe("Whether or not to use jupyterLite."),
  serverUrls: serverUrlSchema.optional()
});
var jupyterReactConfigSchema = jupyter_rect_config_schema.default({
  collaborative: false,
  lite: false
});
var jupyterReactConfigSchemaOutput = jupyter_rect_config_schema.merge(zod.z.object({
  serverUrls: serverUrlSchema.required()
}));
var ipyWidgetSchema = zod.z.object({
  module: zod.z.union([zod.z.string(), zod.z.record(zod.z.string(), zod.z.string())]),
  name: zod.z.string(),
  version: zod.z.string()
});
var jupyterNotebookPropsSchema = zod.z.object({
  cellMetadataPanel: zod.z.boolean().default(true).describe("Can be set on a per-use basis with the ?cellMeta=true or ?cellMeta=false search param."),
  cellSidebarMargin: zod.z.number().default(120).describe("The margin of each cell that should be left for the sidebar menu. This is often best left to the default or to be populated by plugins that might alter the default layout."),
  height: zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  maxHeight: zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's maximum height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  bundledIPyWidgets: ipyWidgetSchema.array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  externalIPyWidgets: ipyWidgetSchema.omit({ module: true }).array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  nbgrader: zod.z.boolean().default(false).describe("Whether or not to load the nbgrader tool with the notebook. This can be overridden with the ?nbgrader=true or ?nbgrader=false search param."),
  readOnly: zod.z.boolean().default(false).describe("Open the notebook without the ability to write to it. This can be overridden with the search param ?nbReadOnly=true or ?nbReadOnly=false.")
}).default({
  cellMetadataPanel: true,
  cellSidebarMargin: 120,
  nbgrader: false,
  readOnly: false,
  height: void 0,
  maxHeight: void 0,
  bundledIPyWidgets: [],
  externalIPyWidgets: []
});
var nbConvertTemplateOptions = zod.z.union([
  zod.z.literal("lab"),
  zod.z.literal("classic"),
  zod.z.literal("reveal"),
  zod.z.string()
]);
var nbConvertConfigSchema = zod.z.object({
  nbconvertPath: zod.z.string().optional().describe("The path to nbConvert. This option will likely be deprecated."),
  conversionTimeout: zod.z.number().default(300).describe("The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."),
  customConversionFunction: zod.z.object({
    pdf: zod.z.function().args(zod.z.string().describe("Path to the notebook"), zod.z.string().describe("Output directory")).returns(zod.z.string().describe("utf-8 encoded string"))
  }).partial().optional(),
  execute: zod.z.boolean().default(false).describe("Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."),
  nbConvertTemplate: nbConvertTemplateOptions.default("classic").describe("The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"),
  notebookOutputDir: zod.z.string().default("/generated").describe("The fsRoot relative file path where converted notebooks should be saved.")
});

// src/defaults/generalDefaults.json
var generalDefaults_default = {
  jupyter: {
    environment: "/opt/anaconda3/bin/python",
    kernel: "python3",
    jupyterPort: 21521
  }
};

// src/zod/jupyter/main.ts
var jupyterConfigSchema = zod.z.object({
  execute: zod.z.boolean().default(false).describe(
    "Whether or not to execute notebook cells immediately after loading."
  ),
  environment: zod.z.string().default(generalDefaults_default.jupyter.environment).describe(
    "The *absolute* path to the python environment with which to open Jupyter cells and notebooks."
  ),
  // TODO: Come back and turn this into a refined string with supported themes within the data-layer package, until an internally developed package using monaco is available.
  syntaxHighlightTheme: zod.z.string().default("dracula"),
  jupyterToken: zod.z.string().optional().describe(
    "A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work."
  ),
  jupyterPort: zod.z.number().int().default(generalDefaults_default.jupyter.jupyterPort).describe(
    "Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config."
  ),
  initiallyFoldCells: zod.z.boolean().default(true).describe(
    "Whether or not to initally fold jupyter input cells that are embedded within mdx notes."
  ),
  kernel: zod.z.string().default(generalDefaults_default.jupyter.kernel).describe(
    "Kernel name to use. Can be overriden with the search param ?kernel=someKernelName"
  ),
  jupyterReactProps: jupyterReactConfigSchema,
  nbConvert: nbConvertConfigSchema.default({}),
  jupyterNotebookProps: jupyterNotebookPropsSchema,
  cellInputWrappers: zod.z.record(
    zod.z.string(),
    zod.z.string().transform((s) => {
      let lines = s.split("\n");
      let inputIndex = lines.findIndex((x) => x.includes("<<Cell-Input>>"));
      if (inputIndex < 0) {
        return {
          prefix: `${s}
`,
          suffix: ""
        };
      }
      return {
        prefix: `${lines.slice(0, inputIndex).join("\n")}
`,
        suffix: `
${lines.slice(inputIndex + 1)}`
      };
    })
  ).default({})
});
var jupyterConfigSchemaOutput = jupyterConfigSchema.merge(
  zod.z.object({
    jupyterReactProps: jupyterReactConfigSchemaOutput
  })
);
var colorList = zod.z.string().array().describe("An array of colors to cycle through for multiple plot paths.");
var defaultColorList = [
  "#e91e62",
  "#9c27b0",
  "#673ab6",
  "#3f50b5",
  "#f44336",
  "#4caf4f",
  "#00a8f4",
  "#ff5721",
  "#ffeb3a",
  "#00bcd4",
  "#cddc39"
];
var plotConfigSchema = zod.z.object({
  plotColorList: zod.z.union([
    colorList,
    zod.z.object({
      dark: colorList,
      light: colorList
    })
  ]).default(defaultColorList),
  plotColorCycleMethod: zod.z.union([
    zod.z.literal("inOrder"),
    zod.z.literal("random")
  ]).default("inOrder")
}).default({});
var credentialsConfigSchema = zod.z.object({
  googleServiceAccountJsonPath: zod.z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});

// src/zod/defaults/general.ts
var defaultIgnoreFilePaths = [/\.git/, /\.next/, /node_modules/, /\.env/, /\.vscode/, /\.package/, /.ipynb_checkpoints/];
var slashesTransform = (leadingSlash, trailingSlash = false) => {
  return (val) => fsUtils.setSlashes({
    value: val,
    leading: leadingSlash,
    trailing: trailingSlash
  });
};
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
var allParsableFileExtensionSchema = zod.z.union([
  defaultParsableFileExtensions,
  parsableFileExtensions
]);
var getParsableExtensions = (config) => {
  let parsable = [
    ".mdx",
    ".ipynb"
  ];
  return parsable;
};
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = general.replaceRecursively(k, /\./gmi, "");
  }
  return ext;
};
var featuresConfigSchema = zod.z.object({
  enabled: zod.z.object({
    commandPalette: zod.z.boolean().default(true).describe("Whether or not app should include the command palette feature. This is only made available for the rare instance of breaking bugs within the command palette."),
    tikz: zod.z.boolean().default(true).describe("Whether or not to build with support for the tikz component. To allow drawing diagrams with the tikz latex package's syntax.")
  }).default({
    commandPalette: true,
    tikz: true
  }),
  pages: zod.z.object({
    equations: zod.z.boolean().default(true).describe("Whether or not to generate an 'equations' page to input, store, reference and search equations."),
    snippets: zod.z.boolean().default(true).describe("Whether or not to generate a 'snippets' page to input, store, reference and search equations."),
    calendar: zod.z.boolean().default(true).describe("Whether or not to build a calendar page to integrate Google calendar within ULLD."),
    bibliography: zod.z.boolean().default(true).describe("Whether or not to build a bibliography page to allow the searching, sorting and referencing files and citations related to the apps .bib content."),
    taskManager: zod.z.boolean().default(true).describe("Whether or not to build a 'todo' page to integrate a task manager within the app.")
  })
}).optional();
var postgresConfigSchema = zod.z.object({
  port: zod.z.coerce.number().int().default(5432),
  dbName: zod.z.string().default("ulld"),
  connectionURI: zod.z.string().default("")
}).default({}).refine(
  (data) => Boolean(data.connectionURI !== "" || data.port && data.dbName)
).transform((data) => {
  if (data.connectionURI && data.connectionURI !== "") {
    return {
      connectionURI: data.connectionURI
    };
  }
  return {
    port: data.port,
    dbName: data.dbName
  };
});

// src/zod/build/database/database.ts
var ulldSupportedDatabases = [
  "postgres",
  "sqlite"
];
var databaseBuildSchema = zod.z.object({
  type: zod.z.enum(ulldSupportedDatabases).default("postgres"),
  postgres: postgresConfigSchema,
  prioritize: zod.z.union([zod.z.literal("speed"), zod.z.literal("size")]).default("speed")
}).default({}).refine(
  (data) => !Boolean(data.type === "postgres" && !data.postgres),
  {
    message: "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI."
  }
);
var validImageExtends = ["jpg", "jpeg", "svg", "png", "webp"];
var validFaviconExtensions = ["ico", "png", "jpg", "svg"];
var additionalUserContent = zod.z.object({
  css: zod.z.string().optional(),
  favicon: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validFaviconExtensions.includes(_s);
    },
    {
      message: `Your favicon must be of a valid favicon type. Currently supported extensions are:
${validFaviconExtensions.join("\n")}`
    }
  ).optional(),
  logo: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validImageExtends.includes(_s);
    },
    {
      message: `Your logo must be of a valid image type. Currently supported image extensions are:
${validImageExtends.join("\n")}`
    }
  ).optional()
}).default({});

// src/zod/build/main.ts
var buildOnlySchema = zod.z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});
var appMetaSchema = zod.z.object({
  title: zod.z.string().default("Uh Little Less Dum"),
  desc: zod.z.string().optional()
}).default({});

// src/zod/defaults/defaultNoteTypes.ts
var defaultNoteTypes = [
  {
    id: "dailyNote",
    fs: "/dailyNotes",
    label: "Daily Notes"
  }
];

// src/zod/main.ts
var zodRegexField = zod.z.union([
  zod.z.instanceof(RegExp),
  zod.z.string(),
  zod.z.object({
    original: zod.z.string(),
    regex: zod.z.instanceof(RegExp)
  })
]).array();
var pluginItemSchema = zod.z.object({
  name: zod.z.string(),
  version: zod.z.string().default("latest"),
  parserIndex: zod.z.number().min(0).default(50)
});
var zodRegexFieldTransform = (b) => {
  return b.map((a) => {
    if (typeof a === "string") {
      return {
        original: a,
        regex: new RegExp(a)
      };
    }
    if (a instanceof RegExp) {
      return {
        original: a.source,
        regex: a
      };
    }
    return a;
  });
};
var appConfigSchema = zod.z.object({
  fsRoot: zod.z.string().describe("The path to the root of the folder which holds your notes.").transform(slashesTransform(true, false)),
  alwaysPreferFs: zod.z.boolean().default(false).describe(
    "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
  ),
  ignoreFilepaths: zodRegexField.describe(
    "File paths within the root directory which should be completely ignored by ULLD."
  ).default(defaultIgnoreFilePaths).transform(zodRegexFieldTransform).default([]),
  tempDir: zod.z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  generatedDir: zod.z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  ignorePreferFsExtensions: zod.z.union([zod.z.string(), zod.z.instanceof(RegExp)]).describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(zodPathGlobTransform).array().default([]),
  fileTypePriority: allParsableFileExtensionSchema.array().describe(
    "An ordered list of different parsable file types. This is only required when a file name exists with multiple parsable file extensions in the same directory. In most cases the default is adequate."
  ).default([
    ".mdx",
    ".md",
    ".ipynb",
    ".pdf",
    ".json",
    ".csv",
    ".tsv",
    ".excel",
    ".tex",
    ".db",
    ".html"
  ]),
  noteTypes: documentTypeConfigSchema.array().default(defaultNoteTypes).transform((x) => {
    let ids = x.map((l) => l.id);
    let data = x;
    for (const defaultNoteType of defaultNoteTypes) {
      if (!ids.includes(defaultNoteType.id)) {
        data.push(documentTypeConfigSchema.parse(defaultNoteType));
      }
    }
    return data;
  }).describe(
    "This is the main location to describe the structure of your notes. Break up your note directory into as many categories as you like, but this app is designed to allow for increasingly refined searching and filtering. Categories of 'math', 'physics' and 'chemistry' would likely fit most users better than 'calc1', 'calc2', 'linearAlgebra', etc. For use cases such as those, please look at the 'autoTag', 'autoSubject', and 'autoTopic' feature."
  ),
  bibPath: zod.z.string().default("/citations.bib").transform(fsUtils$1.withForwardSlash).describe(
    "The root relative path to the .bib file to be integrated within your app."
  ),
  cslPath: zod.z.string().optional().transform(fsUtils$1.withForwardSlashOptional).describe(
    "The root relative path to the .csl file to be used for styling citations. An incredibly robust repo of different csl styles can be found at https://github.com/citation-style-language/styles"
  ),
  dateHandling: dateParseConfigSchema,
  autoTag: zod.z.object({
    path: zod.z.string().describe("The glob pattern to test paths against."),
    tag: zod.z.string().max(15, "Tags must be no more than 15 characters long.")
  }).array().default([]),
  autoTopic: zod.z.object({
    path: zod.z.string().describe("The glob pattern to test paths against."),
    topic: zod.z.string().max(50, "Topic must be no more than 50 characters long.")
  }).array().default([]),
  autoSubject: zod.z.object({
    path: zod.z.string().describe("The glob pattern to test paths against."),
    subject: zod.z.string().max(50, "Subjects must be no more than 15 characters long.")
  }).array().default([]),
  linkAliases: zod.z.record(zod.z.string(), zod.z.string().url()).describe("A map of key value pairs of commonly referenced urls.").default({}),
  features: featuresConfigSchema,
  code: codeConfigSchema,
  math: mathConfigSchema,
  plotting: plotConfigSchema,
  navigation: navigationConfigSchema,
  UI: mainUIConfigSchema,
  database: databaseConfigSchema,
  jupyter: jupyterConfigSchema.default({}),
  credentials: credentialsConfigSchema,
  performance: performanceConfigSchema,
  terminal: terminalConfigSchema,
  slots: slotsSchema.pluginSlotSchema.default({}),
  build: buildOnlySchema,
  meta: appMetaSchema,
  plugins: zod.z.union([
    pluginItemSchema,
    pluginItemSchema.array(),
    zod.z.string(),
    zod.z.string().array()
  ]).transform((a) => {
    let items = Array.isArray(a) ? a : [a];
    let names = [];
    let newItems = items.map((s) => {
      names.push(typeof s === "string" ? s : s.name);
      return typeof s === "string" ? { name: s, version: "latest" } : s;
    });
    return newItems;
  }).default([
    {
      name: "@ulld/api",
      parserIndex: 0,
      version: staticBuildData__default.default.currentPackageVersions["@ulld/api"]
    },
    {
      name: "@ulld/plot",
      parserIndex: 0,
      version: staticBuildData__default.default.currentPackageVersions["@ulld/plot"]
    }
  ])
});
zod.z.union([
  zod.z.literal("bookmarks"),
  zod.z.literal("snippets")
]);
var internalDocumentTypeConfigSchema = documentTypeConfigSchemaBase.partial({
  fs: true
});
var internalDocumentTypes = [
  {
    "id": "bookmarks",
    "keywords": [
      "bookmarks"
    ],
    "url": "/bookmarks",
    "label": "Bookmarks",
    "docType": "bookmarks"
  },
  {
    "id": "settings",
    "keywords": [
      "settings"
    ],
    "url": "/settings",
    "label": "Settings",
    "docType": "none"
  },
  {
    "id": "pdfs",
    "keywords": [
      "pdf",
      "papers",
      "research"
    ],
    "url": "/pdf",
    "label": "Pdfs",
    "docType": "pdf-collection",
    "fs": "/resources/pdf"
  },
  {
    "id": "bibliography",
    "keywords": [
      "bib",
      "references",
      "citations"
    ],
    "url": "/bibliography",
    "label": "Bibliography",
    "docType": "bibliography"
  },
  {
    "id": "addSnippets",
    "url": "/snippets/add",
    "label": "Add Snippets",
    "docType": "none"
  },
  {
    "id": "snippets",
    "url": "/snippets",
    "label": "Snippets",
    "docType": "snippet"
  }
];

// src/zod/secondaryConfigParse/main.ts
var secondaryConfigParse = appConfigSchema.merge(zod.z.object({
  jupyter: jupyterConfigSchemaOutput,
  code: codeConfigSchemaOutput
})).transform((config) => {
  let pe = getParsableExtensions();
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: getFileTypeAppendices(pe),
    internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "heif",
        "gif"
      ]
    }
  };
});

exports.secondaryConfigParse = secondaryConfigParse;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map