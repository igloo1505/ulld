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
var sidebarLinkSchema = _zod.z.union([
  _zod.z.object({
    icon: iconNameField,
    href: _zod.z.string().optional(),
    label: _zod.z.string().optional(),
    Icon: _zod.z.function().optional(),
    onClick: _zod.z.function().optional()
  }),
  _zod.z.string().describe("The id of the document type.")
]);
var navbarLinkSchema = _zod.z.union([
  _zod.z.string().describe("A document type id"),
  _zod.z.object({
    label: _zod.z.string(),
    icon: iconNameField.optional(),
    href: _zod.z.string().optional(),
    onClick: _zod.z.function().optional()
  })
]);
var maxResultsSchema = _zod.z.object({
  categories: _zod.z.number().default(defaultResultLengths.categories),
  equations: _zod.z.number().default(defaultResultLengths.equations),
  snippets: _zod.z.number().default(defaultResultLengths.snippets),
  searchAll: _zod.z.number().default(defaultResultLengths.searchAll)
});
var maxResultsSchemaOutput = _zod.z.object({
  categories: _zod.z.number(),
  equations: _zod.z.number(),
  snippets: _zod.z.number(),
  searchAll: _zod.z.number()
});
var navbarBreakpointSchema = _zod.z.object({
  full: _zod.z.number().default(1024).describe(
    "Pixel width at which the navbar will display all of it's contents."
  ),
  minimal: _zod.z.number().default(640).describe(
    "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
  )
});
var navbarBreakpointSchemaOutput = _zod.z.object({
  full: _zod.z.number(),
  minimal: _zod.z.number()
});
var _navigationConfigSchemaInner = _zod.z.object({
  navbarBreakpoint: navbarBreakpointSchema.default({
    full: 1024,
    minimal: 640
  }),
  maxResultLength: maxResultsSchema.describe(
    "The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts."
  ).default(defaultResultLengths),
  navbarLinks: navbarLinkSchema.array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  ),
  sidebarLinks: sidebarLinkSchema.array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  )
});
var navigationConfigSchema = _navigationConfigSchemaInner.default({});
var navigationConfigSchemaOutput = _navigationConfigSchemaInner.merge(_zod.z.object({
  sidebarLinks: sidebarLinkSchema.array(),
  navbarLinks: navbarLinkSchema.array(),
  snippetsLink: linkLocationSchema,
  maxResultLength: maxResultsSchemaOutput,
  navbarBreakpoint: navbarBreakpointSchemaOutput
}));





exports.iconNameField = iconNameField; exports.navigationConfigSchema = navigationConfigSchema; exports.navigationConfigSchemaOutput = navigationConfigSchemaOutput;
//# sourceMappingURL=chunk-EZLX3AZ7.cjs.map