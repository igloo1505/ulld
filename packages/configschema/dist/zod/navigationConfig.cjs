'use strict';

var zod = require('zod');
var allIcons = require('@ulld/icons/names');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var allIcons__default = /*#__PURE__*/_interopDefault(allIcons);

// src/zod/navigationConfig.ts
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

exports.iconNameField = iconNameField;
exports.navigationConfigSchema = navigationConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=navigationConfig.cjs.map