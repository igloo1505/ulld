"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/navigationConfig.ts
var _zod = require('zod');
var _validIconNameList = require('@ulld/types/validIconNameList');
var defaultResultLengths = {
  categories: 12,
  equations: 10,
  snippets: 10,
  searchAll: 12
};
var iconNameField = _zod.z.string().refine((s) => _validIconNameList.validIconNameList.includes(s));
var linkLocationSchema = _zod.z.union([
  _zod.z.literal("sidebar"),
  _zod.z.literal("navbar"),
  _zod.z.literal("both"),
  _zod.z.literal("none")
]);
var navigationConfigSchema = _zod.z.object({
  navbarBreakpoint: _zod.z.object({
    full: _zod.z.number().default(1024).describe(
      "Pixel width at which the navbar will display all of it's contents."
    ),
    minimal: _zod.z.number().default(640).describe(
      "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
    )
  }).default({
    full: 1024,
    minimal: 640
  }),
  maxResultLength: _zod.z.object({
    categories: _zod.z.number().default(defaultResultLengths.categories),
    equations: _zod.z.number().default(defaultResultLengths.equations),
    snippets: _zod.z.number().default(defaultResultLengths.snippets),
    searchAll: _zod.z.number().default(defaultResultLengths.searchAll)
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
  navbarLinks: _zod.z.union([
    _zod.z.string().describe("A document type id"),
    _zod.z.object({
      label: _zod.z.string(),
      icon: iconNameField.optional(),
      href: _zod.z.string().optional(),
      onClick: _zod.z.function().optional()
    })
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  ),
  sidebarLinks: _zod.z.union([
    _zod.z.object({
      icon: iconNameField,
      href: _zod.z.string().optional(),
      label: _zod.z.string().optional(),
      Icon: _zod.z.function().optional(),
      onClick: _zod.z.function().optional()
    }),
    _zod.z.string().describe("The id of the document type.")
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  )
}).default({});




exports.iconNameField = iconNameField; exports.navigationConfigSchema = navigationConfigSchema;
//# sourceMappingURL=chunk-KSAZPCJH.cjs.map