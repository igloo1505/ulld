import { z, ZodOptional, ZodType } from "zod";
import { ParserConfig } from "./types/parserConfig.js";
export declare const parserKeyList: readonly ["mdx"];
export declare const parserExtensionSchema: z.ZodType<ParserConfig>;
type ParserRecord = Record<(typeof parserKeyList)[number], ZodOptional<ZodType<ParserConfig, z.ZodTypeDef, ParserConfig>>>;
export declare const pluginParserMap: z.ZodObject<ParserRecord, "strip", z.ZodTypeAny, {
    mdx?: ParserConfig | undefined;
}, {
    mdx?: ParserConfig | undefined;
}>;
export {};
//# sourceMappingURL=parserSchema.d.ts.map