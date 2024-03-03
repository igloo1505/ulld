import { z } from "zod"

export const paginationProps = z.object({
    page: z.number().int().default(1),
    take: z.number().int().default(20),
})



export const sortDirProps = z.object({
    sortDir: z.union([z.literal("asc"), z.literal("desc")]).default("desc")
})
