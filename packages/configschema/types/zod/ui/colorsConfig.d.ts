import { z } from "zod";
export declare const colorGroup: z.ZodObject<{
    dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    light: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
}, "strip", z.ZodTypeAny, {
    dark?: string | undefined;
    light?: string | undefined;
}, {
    dark?: string | undefined;
    light?: string | undefined;
}>;
export type ColorGroup = z.output<typeof colorGroup>;
declare const colorValue: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
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
} | null | undefined>;
declare const configColors: z.ZodUnion<[z.ZodLiteral<"red">, z.ZodLiteral<"orange">, z.ZodLiteral<"amber">, z.ZodLiteral<"yellow">, z.ZodLiteral<"lime">, z.ZodLiteral<"green">, z.ZodLiteral<"emerald">, z.ZodLiteral<"teal">, z.ZodLiteral<"cyan">, z.ZodLiteral<"sky">, z.ZodLiteral<"blue">, z.ZodLiteral<"indigo">, z.ZodLiteral<"purple">, z.ZodLiteral<"fuchsia">, z.ZodLiteral<"pink">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"gray">, z.ZodLiteral<"stone">, z.ZodLiteral<"zinc">, z.ZodLiteral<"info">, z.ZodLiteral<"error">, z.ZodLiteral<"warning">, z.ZodLiteral<"alert">, z.ZodLiteral<"success">, z.ZodLiteral<"primary">, z.ZodLiteral<"secondary">, z.ZodLiteral<"success">]>;
export type ConfigColorKey = z.input<typeof configColors>;
export declare const colorsConfigSchema: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
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
export type ColorGroupType = z.infer<typeof colorGroup>;
export type ColorsConfigSchemaType = z.infer<typeof colorsConfigSchema>;
export type ColorsConfigSchemaInput = z.input<typeof colorsConfigSchema>;
export type ConfigColorValueType = z.infer<typeof colorValue>;
export type ConfigColorValueTypeWithId = z.output<typeof colorValue> & {
    colorId: string;
};
export {};
//# sourceMappingURL=colorsConfig.d.ts.map