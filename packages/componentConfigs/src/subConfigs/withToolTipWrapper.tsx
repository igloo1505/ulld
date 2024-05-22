import {z} from 'zod'


export const withToolTipWrapperSchema = z.object({
    toolTip: z.string().optional().describe("ToolTip content alias"),
    tooltip: z.string().optional().describe("ToolTip content alias"),
    tt: z.string().optional().describe("ToolTip content alias"),
    toolTipAsLink: z.boolean().default(false).describe(`Whether tooltip content should be parsed as a link. If left undefined, a regular expression will be used to determing if the content starts with common url formats.`),
    ttAslink: z.boolean().default(false).describe("Alias for `toolTipAsLink`"),
})
