import { z } from "zod";

export const filePathGlobPropsSchema = z.object({
    glob: z.string().default("**/*").transform((x) => x.startsWith("/") ? x.slice(1) : x),
    type: z
        .union([z.literal("dirs"), z.literal("files"), z.literal("dirsAndFiles")])
        .default("files"),
    ignore: z.union([z.string(), z.string().array()]).nullish(),
    returnAs: z.union([z.literal("absolute"), z.literal("rootRelative")]).default("absolute"),
});


export type FilePathGlobInput = z.input<typeof filePathGlobPropsSchema>


export const imageGlobPropsSchema = z.object({
    includeSvg: z.boolean().default(false)
}).merge(filePathGlobPropsSchema.pick({
    returnAs: true,
    ignore: true
}))
