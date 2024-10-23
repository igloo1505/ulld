import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";

const colorList = z
    .string()
    .array()
    .describe("An array of colors to cycle through for multiple plot paths.");

const defaultColorList: string[] = [
    "#e91e62",
    "#9c27b0",
    "#673ab6",
    "#3f50b5",
    "#f44336",
    "#4caf4f",
    "#00a8f4",
    "#ff5721",
    "#ffeb3a",
    "#00bcd4",
    "#cddc39",
];

const _plotConfigSchemaInner = z.object({
    plotColorList: z
        .union([
            colorList,
            z.object({
                dark: colorList,
                light: colorList,
            }),
        ])
        .default(defaultColorList),
    plotColorCycleMethod: z
        .union([z.literal("inOrder"), z.literal("random")])
        .default("inOrder"),
});

export const plotConfigSchema = _plotConfigSchemaInner.default({});

export const plotConfigSchemaOutput: ZodOutputSchema<typeof plotConfigSchema> =
    z.object({
        plotColorCycleMethod: z.union([z.literal("inOrder"), z.literal("random")]),
        plotColorList: z.union([
            colorList,
            z.object({
                dark: colorList,
                light: colorList,
            }),
        ]),
    });
