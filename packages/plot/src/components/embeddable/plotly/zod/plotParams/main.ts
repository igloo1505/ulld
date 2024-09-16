import { z } from "zod";
import { plotlyDataSchema } from "../dataHandling/plotlyData/plotlyData";
import { plotlyLayoutSchema } from "../3d/layout";
import { plotlyFrameSchema } from "../general/frame";
import { plotlyConfigSchema } from "../general/config/config";
import { plotlyInternalDataHandlerSchema } from "../dataHandling/internalDataHandling/main";
import { plotlyDataAxisRange } from "../dataHandling/utils";

export const plotlyPlotParamsSchema = z
    .object({
        functions: z
            .union([
                plotlyInternalDataHandlerSchema,
                plotlyInternalDataHandlerSchema.array(),
            ])
            .default([])
            .transform((x) => (Array.isArray(x) ? x : [x])),
        data: z
            .union([plotlyDataSchema, plotlyDataSchema.array()])
            .default([])
            .transform((x) => (Array.isArray(x) ? x : [x])),
        x: plotlyDataAxisRange,
        layout: plotlyLayoutSchema.partial(),
        frames: plotlyFrameSchema.array().optional(),
        config: plotlyConfigSchema.partial().optional(),
        revision: z.number().optional(),
        divId: z.string().optional(),
        className: z.string().optional(),
        style: z.record(z.string(), z.any()).optional(),
        debug: z.boolean().optional(),
        useResizeHandler: z.boolean().optional(),
    })
    .transform((x) => {
        // TODO: Fix this type error if there are reliability issues. Right now it's only an error in relation to what's required and what's not, but that seems to be for internal use by plotly.
        x.data = [...(x.data as any), ...x.functions];
        return x;
    });


export type PlotyParamsInput = z.input<typeof plotlyPlotParamsSchema>
export type PlotyParamsOutput = z.output<typeof plotlyPlotParamsSchema>
