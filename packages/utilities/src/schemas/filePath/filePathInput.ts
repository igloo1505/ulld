import { z } from "zod";

export const filePathGlobPropsSchema = z.object({
    glob: z.string().default("**/*"),
    type: z
        .union([z.literal("dirs"), z.literal("files"), z.literal("dirsAndFiles")])
        .default("files"),
    ignore: z.union([z.string(), z.string().array()]).nullish(),
    returnAs: z.union([z.literal("absolute"), z.literal("rootRelative")]).default("absolute"),
});