// src/zod/navigationConfig.ts
import { z } from "zod";
import { validIconNameList } from "@ulld/types/validIconNameList";
var defaultResultLengths = {
  categories: 12,
  equations: 10,
  snippets: 10,
  searchAll: 12
};
var iconNameField = z.string().refine((s) => validIconNameList.includes(s));
var linkLocationSchema = z.union([
  z.literal("sidebar"),
  z.literal("navbar"),
  z.literal("both"),
  z.literal("none")
]);
var sidebarLinkSchema = z.union([
  z.object({
    icon: iconNameField,
    href: z.string().optional(),
    label: z.string().optional(),
    Icon: z.function().optional(),
    onClick: z.function().optional()
  }),
  z.string().describe("The id of the document type.")
]);
var navbarLinkSchema = z.union([
  z.string().describe("A document type id"),
  z.object({
    label: z.string(),
    icon: iconNameField.optional(),
    href: z.string().optional(),
    onClick: z.function().optional()
  })
]);
var maxResultsSchema = z.object({
  categories: z.number().default(defaultResultLengths.categories),
  equations: z.number().default(defaultResultLengths.equations),
  snippets: z.number().default(defaultResultLengths.snippets),
  searchAll: z.number().default(defaultResultLengths.searchAll)
});
var maxResultsSchemaOutput = z.object({
  categories: z.number(),
  equations: z.number(),
  snippets: z.number(),
  searchAll: z.number()
});
var navbarBreakpointSchema = z.object({
  full: z.number().default(1024).describe(
    "Pixel width at which the navbar will display all of it's contents."
  ),
  minimal: z.number().default(640).describe(
    "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
  )
});
var navbarBreakpointSchemaOutput = z.object({
  full: z.number(),
  minimal: z.number()
});
var _navigationConfigSchemaInner = z.object({
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
var navigationConfigSchemaOutput = _navigationConfigSchemaInner.merge(z.object({
  sidebarLinks: sidebarLinkSchema.array(),
  navbarLinks: navbarLinkSchema.array(),
  snippetsLink: linkLocationSchema,
  maxResultLength: maxResultsSchemaOutput,
  navbarBreakpoint: navbarBreakpointSchemaOutput
}));

export {
  iconNameField,
  navigationConfigSchema,
  navigationConfigSchemaOutput
};
//# sourceMappingURL=chunk-Y4CBYEJ6.mjs.map