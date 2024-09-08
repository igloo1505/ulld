'use strict';

var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');
var identity = require('@ulld/utilities/utils/identity');
var allIcons = require('@ulld/icons/names');

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

exports.docTypeUISchema = docTypeUISchema;
exports.documentTypeConfigSchema = documentTypeConfigSchema;
exports.documentTypeConfigSchemaBase = documentTypeConfigSchemaBase;
exports.zodDocTypeInput = zodDocTypeInput;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=documentConfigSchema.cjs.map