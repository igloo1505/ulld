import { z } from "zod";

type ScatterPlotType = "scatter" | "line";

const defaultPlotType: ScatterPlotType = "line";

export const lineAndScatterSchema = z
    .object({
        min: z.number().default(0),
        max: z.number().default(100),
        scatterPlot: z.boolean().default(false),
        linePlot: z.boolean().default(false),
    })
    .transform((data) => {
        return {
            ...data,
            plotType: (data.scatterPlot
                ? "scatter"
                : data.linePlot
                    ? "line"
                    : defaultPlotType) as ScatterPlotType,
        };
    });


export type LineAndScatterSchema = z.input<typeof lineAndScatterSchema>
