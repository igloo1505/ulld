import { z } from "zod";


export const readingListContentTypeSchema = z.union([
    z.literal("MdxNote"),
    z.literal("BibEntry"),
])
