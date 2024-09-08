import { z } from 'zod';
export declare const parseMdxStringSchema: z.ZodObject<{
    content: z.ZodString;
    display: z.ZodUnion<[z.ZodLiteral<"display">, z.ZodLiteral<"inline">]>;
}, "strip", z.ZodTypeAny, {
    content: string;
    display: "display" | "inline";
}, {
    content: string;
    display: "display" | "inline";
}>;
export type ParseMdxStringInput = z.input<typeof parseMdxStringSchema>;
export type ParseMdxStringOutput = z.output<typeof parseMdxStringSchema>;
//# sourceMappingURL=parseMdxStringSchema.d.ts.map