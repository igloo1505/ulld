import { z } from "zod";
import { getColorMap, themeSchema } from "@ulld/tailwind/themeUtils";

export const internalPropState = z
    .object({
        ulldTheme: themeSchema.default("violet").transform(async (t) => {
       let colorMap = await getColorMap(t)
        return {
            theme: t,
            colorMap
        }
    }),
        darkMode: z.boolean().default(true),
        cube: z.boolean().default(false),
        xTicks: z.number().optional(),
        yTicks: z.number().optional(),
        zTicks: z.number().optional(),
        xLabel: z.string().default("x"),
        yLabel: z.string().default("y"),
        zLabel: z.string().default("z"),
        noGrid: z.boolean().default(false),
        title: z.string().optional(),
        range: z
            .tuple([z.number(), z.number()])
            .default([-10, 10])
            .describe("Override default range's and apply to all independent axis'"),
        xRange: z.tuple([z.number(), z.number()]).optional(),
        yRange: z.tuple([z.number(), z.number()]).optional(),
        zRange: z.tuple([z.number(), z.number()]).optional(),
        axisPoints: z.number().default(100),
    })
    .describe(
        "Data passed to plotly after being handled internally. Not part of Plotly's API directly.",
    )
