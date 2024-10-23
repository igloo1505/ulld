import { z } from "zod";
import { defaultUlldColorMap } from "./defaultColorMap.js";
import { convertColorString } from "@ulld/utilities/convertColorString";
import { ZodOutputSchema } from "../../types.js";

const colorTransformOptional = (val?: string | null) => val ? convertColorString(val) : undefined;

const colorScaleKeys = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
] as const;

// TODO: Add support for color gradients here.
// const gradientObjectSchema = z.object({
//     50: z.string().transform(colorTransform),
//     100: z.string().transform(colorTransform),
//     200: z.string().transform(colorTransform),
//     300: z.string().transform(colorTransform),
//     400: z.string().transform(colorTransform),
//     500: z.string().transform(colorTransform),
//     600: z.string().transform(colorTransform),
//     700: z.string().transform(colorTransform),
//     800: z.string().transform(colorTransform),
//     900: z.string().transform(colorTransform),
//     950: z.string().transform(colorTransform),
// });

type T = { [k in (typeof colorScaleKeys)[number]]: string };

const getObj = (c: string[]): T => {
    let ob: T = {} as T;
    colorScaleKeys.forEach((k, i) => {
        ob[k] = c[i];
    });
    return ob;
};

// TODO: Populate these color values with a default list and override them as they're populated in the appConfig to make sure they are available to developers throughout the app. Make sure these are mapped to css variables with a reliable naming convention to make them available without direct access to the config.

export const colorGroup = z.object({
    dark: z.string().optional().transform(colorTransformOptional),
    light: z.string().optional().transform(colorTransformOptional),
});

export type ColorGroup = z.output<typeof colorGroup>;

const colorValue = z
    .union([
        colorGroup,
        z.string().transform((c) => convertColorString(c, "hsl")),
    ])
    .nullish()
    .transform((a) => {
        if (!a) return undefined;
        if (typeof a === "string") {
            return {
                dark: a,
                light: a,
            } as {
                dark: string;
                light: string;
            };
        }
        if (!("dark" in a)) {
            return {
                dark: a.light,
                light: a.light,
            } as {
                dark: string;
                light: string;
            };
        }
        return a;
    });


export const colorValueOutput: ZodOutputSchema<typeof colorValue> = z.object({
    dark: z.string(),
    light: z.string(),
})

const configColors = z.union([
    z.literal("red"),
    z.literal("orange"),
    z.literal("amber"),
    z.literal("yellow"),
    z.literal("lime"),
    z.literal("green"),
    z.literal("emerald"),
    z.literal("teal"),
    z.literal("cyan"),
    z.literal("sky"),
    z.literal("blue"),
    z.literal("indigo"),
    z.literal("purple"),
    z.literal("fuchsia"),
    z.literal("pink"),
    z.literal("rose"),
    z.literal("slate"),
    z.literal("gray"),
    z.literal("stone"),
    z.literal("zinc"),
    z.literal("info"),
    z.literal("error"),
    z.literal("warning"),
    z.literal("alert"),
    z.literal("success"),
    z.literal("primary"),
    z.literal("secondary"),
    z.literal("success"),
]);

export type ConfigColorKey = z.input<typeof configColors>;

const colorConfigSchemaInner = z
    .record(z.string(), colorValue)

export const colorsConfigSchema = 
    colorConfigSchemaInner.default(defaultUlldColorMap);

export const colorConfigSchemaOutput = z.record(z.string(), colorValueOutput)

export type ColorGroupType = z.infer<typeof colorGroup>;

export type ColorsConfigSchemaType = z.infer<typeof colorsConfigSchema>;
export type ColorsConfigSchemaInput = z.input<typeof colorsConfigSchema>;

export type ConfigColorValueType = z.infer<typeof colorValue>;
export type ConfigColorValueTypeWithId = z.output<typeof colorValue> & {
    colorId: string;
};
