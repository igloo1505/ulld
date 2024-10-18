import { z } from "zod";
export declare const fontConfigSchema: z.ZodObject<{
    path: z.ZodString;
    weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
    style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
}, "strip", z.ZodTypeAny, {
    path: string;
    weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    style: "bold" | "italic" | "normal";
}, {
    path: string;
    weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    style: "bold" | "italic" | "normal";
}>;
export declare const textConfigSchema: z.ZodDefault<z.ZodObject<{
    blockQuoteItalic: z.ZodDefault<z.ZodBoolean>;
    fontPaths: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
        style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        style: "bold" | "italic" | "normal";
    }, {
        path: string;
        weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        style: "bold" | "italic" | "normal";
    }>, "many">, z.ZodLiteral<"default">]>>;
}, "strip", z.ZodTypeAny, {
    blockQuoteItalic: boolean;
    fontPaths: {
        path: string;
        weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        style: "bold" | "italic" | "normal";
    }[] | "default";
}, {
    blockQuoteItalic?: boolean | undefined;
    fontPaths?: {
        path: string;
        weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        style: "bold" | "italic" | "normal";
    }[] | "default" | undefined;
}>>;
//# sourceMappingURL=textConfig.d.ts.map