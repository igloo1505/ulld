import { z } from 'zod'

const defaultResultLengths = {
    categories: 12,
    equations: 10,
    snippets: 10,
    searchAll: 12
}


export const navigationConfigSchema = z.object({
    navbarBreakpoint: z.object({
        full: z.number().default(1024).describe("Pixel width at which the navbar will display all of it's contents."),
        minimal: z.number().default(640).describe("Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."),
    }).default({
        full: 1024,
        minimal: 640
    }),
    maxResultLength: z.object({
        categories: z.number().default(defaultResultLengths.categories),
        equations: z.number().default(defaultResultLengths.equations),
        snippets: z.number().default(defaultResultLengths.snippets),
        searchAll: z.number().default(defaultResultLengths.searchAll),
    }).describe("The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts.").default(defaultResultLengths),
    navbarLinkIds: z.string().array().default([]).describe("Either the document type id or the internalLink id to be to included in the navbar."),
    sidebarLinkId: z.string().array().default([]).describe("Either the document type id or the internalLink id to be to included in the navbar."),
}).default({})
