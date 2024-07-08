import { z } from "zod";
import { ArrayUtilities } from "../../utils/arrayUtilities";

export const paginationProps = z.object({
    page: z.number().int().default(1),
    take: z.number().int().default(20),
})

export const sortDirProps = z.object({
    sortDir: z.union([z.literal("asc"), z.literal("desc")]).default("desc")
})

export const equationSearchParamsSchema = z.object({
    tags: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
    variables: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
    query: z.string().optional(),
    value: z.string().optional(),
    orderBy: z.union([
        z.literal("title"),
        z.literal("createdAt"),
    ]).default("title")
}).merge(paginationProps).merge(sortDirProps)
