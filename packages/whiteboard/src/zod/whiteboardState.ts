import {z} from 'zod'


// TODO: Move this over to the useWhiteboardState hook and implement state this way. This will be much more reliable and extensible, but for now focus on finish the paper.
export const whiteboardStateSchema = z.object({
    isLocal: z.boolean().default(false),
    lock: z.boolean().default(false),
    fullWidth: z.boolean().default(false),
    full: z.boolean().default(false),
    sidebar: z.boolean().default(false),
    layout: z.union([
        z.literal("full-width"),
        z.literal("full"),
        z.literal("sidebar"),
    ]).default("full-width"),
    zen: z.boolean().default(false),
    grid: z.boolean().default(false),
    dark: z.boolean().default(true),
    viewMode: z.boolean().default(false),
    noCache: z.boolean().default(false),
    url: z.string().url().nullish(),
    id: z.string().nullish(),
}).transform((a) => {
return {
        ...a,
        layout: a.fullWidth ? "full-width" as "full-width" : a.full ? "full" as "full" : a.layout,
        viewModeEnabled: a.lock || a.viewMode,
        gridModeEnabled: a.grid
    }
})
