import {z} from 'zod'


export const mathjaxParserOptionsSchema = z.object({
    em: z.number(),
    ex: z.number(),
    width: z.number(),
    inline: z.boolean().optional(),
    styles: z.boolean().optional(),
    container: z.boolean().optional(),
    fontCache: z.boolean().optional(),
    assistiveMml: z.boolean().optional(),
    autoWrap: z.boolean().optional(),
    matchFontHeight: z.boolean().optional()
}).partial()

export type MathjaxParserParams = z.output<typeof mathjaxParserOptionsSchema>

export const configureDefaultMathjaxOpts = (opts: MathjaxParserParams): Required<Omit<MathjaxParserParams, "matchFontHeight">> & { matchFontHeight: boolean | undefined } => {
    return {
        inline: typeof opts.inline !== "boolean" ? true : opts.inline,
        em: opts.em || 16,
        ex: opts.ex || 8,
        width: opts.width || 80 * 16,
        styles: typeof opts.styles !== "boolean" ? true : opts.styles,
        container: typeof opts.container !== "boolean" ? true : opts.container,
        fontCache: typeof opts.fontCache !== "boolean" ? true : opts.fontCache,
        assistiveMml: typeof opts.assistiveMml !== "boolean" ? true : opts.assistiveMml,
        autoWrap: typeof opts.autoWrap === "boolean" ? opts.autoWrap : false,
        matchFontHeight: typeof opts.matchFontHeight === "boolean" ? opts.matchFontHeight : undefined
    }
}
