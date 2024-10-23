"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');


var _chunkC4XI6WMKcjs = require('./chunk-C4XI6WMK.cjs');

// src/zod/documentConfigSchema.ts
var _zod = require('zod');
var _fsUtils = require('@ulld/utilities/utils/fsUtils');



var _identity = require('@ulld/utilities/utils/identity');
var parsableSearchParam = _zod.z.union([
  _zod.z.string(),
  _zod.z.string().array(),
  _zod.z.number(),
  _zod.z.number().array()
]);
var docTypeColorGroup = _zod.z.object({
  bg: _zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  ),
  fg: _zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  )
});
var docTypeStylesField = _zod.z.object({
  dark: docTypeColorGroup.default({}),
  light: docTypeColorGroup.default({})
  // combined_classes: z
  //     .string()
  //     .optional()
  //     .describe(
  //         "Css classes to be applied to elements related to this specific document type.",
  //     ),
});
var docTypeStylesFieldOutput = _zod.z.object({
  dark: docTypeColorGroup,
  light: docTypeColorGroup
});
var _docTypeUISchemaInner = _zod.z.object({
  styles: docTypeStylesField.default({})
  // .transform((a) => {
  //     return {
  //         dark: a.dark,
  //         light: a.light,
  //         // combined_classes:
  //         //     a.combined_classes ||
  //         //     `${a.dark.bg || ""} ${a.dark.fg || ""} ${a.light.bg || ""} ${a.light.fg || ""}`,
  //     };
  // }),
});
var docTypeUISchema = _docTypeUISchemaInner.default({});
var docTypeUISchemaOutput = _docTypeUISchemaInner.merge(
  _zod.z.object({
    styles: docTypeStylesFieldOutput
  })
);
var zodDocTypeInput = _zod.z.string().transform(_identity.makeValidIdOnlyLetters);
var urlQueryField = _zod.z.record(_zod.z.string(), parsableSearchParam);
var matchWeightField = _zod.z.number().min(0).max(100);
var documentTypeConfigSchemaBase = _zod.z.object({
  id: _zod.z.string().optional().describe("A unique key to be used internally to deal with this doctype."),
  docType: zodDocTypeInput.optional().describe(
    "A unique key which describes the nature of this document type: 'MathNote', 'Journal', 'References', etc..."
  ),
  filePathPattern: _zod.z.string().optional().describe(
    "A glob style string to test a file path for this note type. Should return true if a given file is of this note type."
  ),
  matchWeight: matchWeightField.default(50).describe(
    "An extra weight between 0 and 100 to apply to matches. This can be very important when the location of one document type exists as a child of another, in which case an increased weight should be applied to the child document type. Default: 50"
  ),
  // contentType: documentConfigContentTypeSchema.default("mdx")
  fs: _zod.z.string().describe(
    "The path to the root of the directory which holds this document type. This path must be both relative to the appConfig.fsRoot folder and a child of it. For example, a root directory at '/Users/steve/Desktop/notes' might have folders within it of /Users/steve/Desktop/notes/math and /Users/steve/Desktop/notes/physics. These appConfig.noteTypes[0].fs should be '/math' and the latter should be '/physics'."
  ).transform(_fsUtils.withForwardSlash),
  url: _zod.z.string().describe("The url at which this note should be displayed.").transform(_chunkJUH5FQQRcjs.zodWithForwardSlashTransform),
  urlQuery: urlQueryField.optional().describe(
    "Url search paramters to be appended to generated buttons and links for this doc type in some cases. Useful for things like populating an initial list or opening with certain default override-able settings."
  ).default({}),
  keywords: _zod.z.string().array().default([]).describe(
    "Keywords to help with search results and command sorting related to this document type."
  ),
  label: _zod.z.string().describe(
    "The label to be used for this document type where automatically generated links, commands and buttons are referencing it."
  ),
  topicLabel: _zod.z.string().optional().describe(
    "Replace references to the 'topic' tag with this label. This is useful for things like managing freelance work, where 'topics' might better be described as 'Jobs' or 'Clients'."
  ),
  subjectLabel: _zod.z.string().optional().describe(
    "Replace references to the 'subject' tag with this label. This is useful for things like managing freelance work, where 'subjects' might better be described as 'Jobs' or 'Clients'."
  ),
  autoTag: _zod.z.string().array().default([]).describe(
    "Automatically append these tags to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoTopic: _zod.z.string().array().default([]).describe(
    "Automatically append these topics to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoSubject: _zod.z.string().array().default([]).describe(
    "Automatically append these subjects to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  UI: docTypeUISchema.default({}),
  icon: _chunkC4XI6WMKcjs.iconNameField.default("ulld"),
  inSidebar: _zod.z.boolean().default(false),
  inNavbar: _zod.z.boolean().default(false)
});
var documentTypeConfigSchemaInner = documentTypeConfigSchemaBase.partial({
  url: true
});
var documentTypeConfigSchema = documentTypeConfigSchemaInner.transform(
  (a) => {
    const _id = _identity.makeValidId.call(void 0, a.id || a.label);
    return {
      ...a,
      docType: _id,
      // For backward compatibility.
      id: _id,
      url: a.url || `/${_id}`
    };
  }
);
var documentTypeConfigSchemaOutputSchema = documentTypeConfigSchemaInner.merge(
  _zod.z.object({
    id: _zod.z.string(),
    docType: _zod.z.string(),
    matchWeight: matchWeightField,
    urlQuery: urlQueryField,
    url: _zod.z.string(),
    keywords: _zod.z.string().array(),
    autoTag: _zod.z.string().array(),
    autoTopic: _zod.z.string().array(),
    autoSubject: _zod.z.string().array(),
    UI: docTypeUISchemaOutput,
    icon: _chunkC4XI6WMKcjs.iconNameField,
    inSidebar: _zod.z.boolean(),
    inNavbar: _zod.z.boolean()
  })
);









exports.docTypeUISchema = docTypeUISchema; exports.docTypeUISchemaOutput = docTypeUISchemaOutput; exports.zodDocTypeInput = zodDocTypeInput; exports.documentTypeConfigSchemaBase = documentTypeConfigSchemaBase; exports.documentTypeConfigSchemaInner = documentTypeConfigSchemaInner; exports.documentTypeConfigSchema = documentTypeConfigSchema; exports.documentTypeConfigSchemaOutputSchema = documentTypeConfigSchemaOutputSchema;
//# sourceMappingURL=chunk-GV6X5BBP.cjs.map