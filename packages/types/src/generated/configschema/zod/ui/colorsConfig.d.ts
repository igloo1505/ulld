import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const colorGroup: z.ZodObject<{
    dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    light: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
}, "strip", z.ZodTypeAny, {
    dark?: string;
    light?: string;
}, {
    dark?: string;
    light?: string;
}>;
export type ColorGroup = z.output<typeof colorGroup>;
declare const colorValue: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
    dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    light: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
}, "strip", z.ZodTypeAny, {
    dark?: string;
    light?: string;
}, {
    dark?: string;
    light?: string;
}>, z.ZodEffects<z.ZodString, string, string>]>>>, {
    dark?: string;
    light?: string;
}, string | {
    dark?: string;
    light?: string;
}>;
export declare const colorValueOutput: ZodOutputSchema<typeof colorValue>;
declare const configColors: z.ZodUnion<[z.ZodLiteral<"red">, z.ZodLiteral<"orange">, z.ZodLiteral<"amber">, z.ZodLiteral<"yellow">, z.ZodLiteral<"lime">, z.ZodLiteral<"green">, z.ZodLiteral<"emerald">, z.ZodLiteral<"teal">, z.ZodLiteral<"cyan">, z.ZodLiteral<"sky">, z.ZodLiteral<"blue">, z.ZodLiteral<"indigo">, z.ZodLiteral<"purple">, z.ZodLiteral<"fuchsia">, z.ZodLiteral<"pink">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"gray">, z.ZodLiteral<"stone">, z.ZodLiteral<"zinc">, z.ZodLiteral<"info">, z.ZodLiteral<"error">, z.ZodLiteral<"warning">, z.ZodLiteral<"alert">, z.ZodLiteral<"success">, z.ZodLiteral<"primary">, z.ZodLiteral<"secondary">, z.ZodLiteral<"success">]>;
export type ConfigColorKey = z.input<typeof configColors>;
export declare const colorsConfigSchema: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
    dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    light: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
}, "strip", z.ZodTypeAny, {
    dark?: string;
    light?: string;
}, {
    dark?: string;
    light?: string;
}>, z.ZodEffects<z.ZodString, string, string>]>>>, {
    dark?: string;
    light?: string;
}, string | {
    dark?: string;
    light?: string;
}>>>;
export declare const colorConfigSchemaOutput: z.ZodRecord<z.ZodString, ZodOutputSchema<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
    dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    light: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
}, "strip", z.ZodTypeAny, {
    dark?: string;
    light?: string;
}, {
    dark?: string;
    light?: string;
}>, z.ZodEffects<z.ZodString, string, string>]>>>, {
    dark?: string;
    light?: string;
}, string | {
    dark?: string;
    light?: string;
}>>>;
export type ColorGroupType = z.infer<typeof colorGroup>;
export type ColorsConfigSchemaType = z.infer<typeof colorsConfigSchema>;
export type ColorsConfigSchemaInput = z.input<typeof colorsConfigSchema>;
export type ConfigColorValueType = z.infer<typeof colorValue>;
export type ConfigColorValueTypeWithId = z.output<typeof colorValue> & {
    colorId: string;
};
export {};
