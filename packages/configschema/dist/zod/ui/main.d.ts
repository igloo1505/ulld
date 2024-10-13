import { z } from "zod";
export declare const mainUIConfigSchema: z.ZodDefault<z.ZodObject<{
    table: z.ZodDefault<z.ZodObject<{
        maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
    }, "strip", z.ZodTypeAny, {
        maxHeight: string;
    }, {
        maxHeight?: string | number | undefined;
    }>>;
    text: z.ZodDefault<z.ZodObject<{
        blockQuoteItalic: z.ZodDefault<z.ZodBoolean>;
        fontPaths: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
            style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
        }, "strip", z.ZodTypeAny, {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }, {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }>, "many">, z.ZodLiteral<"default">]>>;
    }, "strip", z.ZodTypeAny, {
        blockQuoteItalic: boolean;
        fontPaths: {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }[] | "default";
    }, {
        blockQuoteItalic?: boolean | undefined;
        fontPaths?: {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }[] | "default" | undefined;
    }>>;
    media: z.ZodDefault<z.ZodObject<{
        imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
        includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
        imageRemoteTest: z.ZodDefault<z.ZodArray<z.ZodType<RegExp, z.ZodTypeDef, RegExp>, "many">>;
    }, "strip", z.ZodTypeAny, {
        imageMap: Record<string, string | undefined>;
        includeDefaultImageMap: boolean;
        imageRemoteTest: RegExp[];
    }, {
        imageMap?: Record<string, string | undefined> | undefined;
        includeDefaultImageMap?: boolean | undefined;
        imageRemoteTest?: RegExp[] | undefined;
    }>>;
    colors: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
        dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        light: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    }, "strip", z.ZodTypeAny, {
        dark?: string | undefined;
        light?: string | undefined;
    }, {
        dark?: string | undefined;
        light?: string | undefined;
    }>, z.ZodEffects<z.ZodString, string | undefined, string>]>>>, {
        dark?: string | undefined;
        light?: string | undefined;
    } | undefined, string | {
        dark?: string | undefined;
        light?: string | undefined;
    } | null | undefined>>>;
    theme: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"blue">, z.ZodLiteral<"gray">, z.ZodLiteral<"green">, z.ZodLiteral<"neutral">, z.ZodLiteral<"orange">, z.ZodLiteral<"red">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"stone">, z.ZodLiteral<"violet">, z.ZodLiteral<"yellow">, z.ZodLiteral<"zinc">, z.ZodLiteral<"ulld">]>>;
    autoApplyMdxTitles: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    table: {
        maxHeight: string;
    };
    text: {
        blockQuoteItalic: boolean;
        fontPaths: {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }[] | "default";
    };
    media: {
        imageMap: Record<string, string | undefined>;
        includeDefaultImageMap: boolean;
        imageRemoteTest: RegExp[];
    };
    theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
    colors: Record<string, {
        dark?: string | undefined;
        light?: string | undefined;
    } | undefined>;
    autoApplyMdxTitles: boolean;
}, {
    table?: {
        maxHeight?: string | number | undefined;
    } | undefined;
    text?: {
        blockQuoteItalic?: boolean | undefined;
        fontPaths?: {
            weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            style: "bold" | "italic" | "normal";
            path: string;
        }[] | "default" | undefined;
    } | undefined;
    media?: {
        imageMap?: Record<string, string | undefined> | undefined;
        includeDefaultImageMap?: boolean | undefined;
        imageRemoteTest?: RegExp[] | undefined;
    } | undefined;
    theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
    colors?: Record<string, string | {
        dark?: string | undefined;
        light?: string | undefined;
    } | null | undefined> | undefined;
    autoApplyMdxTitles?: boolean | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map