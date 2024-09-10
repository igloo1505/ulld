import { z } from "zod";
export declare const parseMdxProps: z.ZodObject<{
    content: z.ZodString;
    display: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"display">, z.ZodLiteral<"inline">]>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    display: "inline" | "display";
}, {
    content: string;
    display?: "inline" | "display" | undefined;
}>;
export type ParseMdxPropInput = z.input<typeof parseMdxProps>;
export type ParseMdxPropOutput = z.output<typeof parseMdxProps>;
//# sourceMappingURL=parseMdxStringProps.d.ts.map