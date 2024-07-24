import { z, ZodOptional, ZodType } from "zod";
import { ParserConfig } from "./types/parserConfig";
import { transformExportString } from "./transforms";

export const parserKeyList = ["mdx"] as const;

export const parserExtensionSchema: z.ZodType<ParserConfig> = z.object({
    export: z
        .string()
        .describe(
            "The export in your package.json that exports the parser function. The parsing function must be the file's default export.",
        )
        .transform(transformExportString),
    conditions: z
        .object({
            frontMatter: z.string().optional(),
        })
        .default({}),
});

type ParserRecord = Record<
    (typeof parserKeyList)[number],
    ZodOptional<ZodType<ParserConfig, z.ZodTypeDef, ParserConfig>>
>;

export const pluginParserMap = z.object<ParserRecord>({
    mdx: parserExtensionSchema.optional(),
});
