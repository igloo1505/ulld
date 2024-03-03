import {z} from 'zod'


export const internalDocTypes = z.union([
    z.literal("bookmarks"),
    z.literal("snippets")
])
