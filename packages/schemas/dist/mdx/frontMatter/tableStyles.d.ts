import { z } from "zod";
export declare const zodFrontMatterTableStylesObject: z.ZodObject<{
    fullWidth: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"base">, z.ZodLiteral<"lg">, z.ZodLiteral<"xl">, z.ZodLiteral<"small">]>>>;
    math: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"base">, z.ZodLiteral<"lg">, z.ZodLiteral<"xl">, z.ZodLiteral<"small">]>>>;
    tableCenter: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    textCenter: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    headingCenter: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    float: z.ZodOptional<z.ZodNullable<z.ZodEnum<["right", "left"]>>>;
    noMax: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    expand: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    fullWidth: boolean | null;
    tableCenter: boolean | null;
    textCenter: boolean | null;
    headingCenter: boolean | null;
    noMax: boolean | null;
    expand: boolean | null;
    float?: "right" | "left" | null | undefined;
    text?: "small" | "base" | "lg" | "xl" | null | undefined;
    math?: "small" | "base" | "lg" | "xl" | null | undefined;
}, {
    float?: "right" | "left" | null | undefined;
    fullWidth?: boolean | null | undefined;
    text?: "small" | "base" | "lg" | "xl" | null | undefined;
    math?: "small" | "base" | "lg" | "xl" | null | undefined;
    tableCenter?: boolean | null | undefined;
    textCenter?: boolean | null | undefined;
    headingCenter?: boolean | null | undefined;
    noMax?: boolean | null | undefined;
    expand?: boolean | null | undefined;
}>;
//# sourceMappingURL=tableStyles.d.ts.map