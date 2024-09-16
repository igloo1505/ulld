import { z } from "zod";
import { plotlyDataSchema } from "../dataHandling/plotlyData/plotlyData";
import { plotlyLayoutSchema } from "../3d/layout";
import { plotlyFrameSchema } from "../general/frame";
import { plotlyConfigSchema } from "../general/config/config";
import { plotlyInternalDataHandlerSchema } from "../dataHandling/internalDataHandling/main";
import { plotlyDataAxisRange } from "../dataHandling/utils";
import { plotlyPlotFunction, plotlyPlotFunctionObject } from "../dataHandling/plotFunction";
import {getAppConfigClientSide} from "@ulld/utilities/getAppConfigClientSide"
import { ExtendedMath } from "@ulld/math/extendedMath";

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
        setX: plotlyDataAxisRange.optional(),
        setY: plotlyDataAxisRange.optional(),
        f: plotlyPlotFunction.innerType().optional(),
        layout: plotlyLayoutSchema.default({}),
        frames: plotlyFrameSchema.array().optional(),
        config: plotlyConfigSchema.default({}),
        revision: z.number().optional(),
        divId: z.string().optional(),
        className: z.string().optional(),
        style: z.record(z.string(), z.any()).optional(),
        debug: z.boolean().optional(),
        useResizeHandler: z.boolean().optional(),
    })
    .transform((x) => {
        // TODO: Fix this type error if there are reliability issues. Right now it's only an error in relation to what's required and what's not, but that seems to be for internal use by plotly.
        x.data = [...x.data, ...x.functions];
        if(x.setX && x.f){
        let appConfig = getAppConfigClientSide()
        let extendedMath = new ExtendedMath()
        let yFunc = typeof x.y === "function" ? x.y : typeof x.f === "function" ? x.f : undefined
        let _data = plotlyPlotFunctionObject.parse({
            f: x.f,
            x: x.setX,
            y: yFunc ? x.setX.map((n) => yFunc(n, extendedMath)) : x.y
        })
        console.log("_data: ", _data)
        x.data.push(_data)
        }
        return x;
    });


export type PlotyParamsInput = z.input<typeof plotlyPlotParamsSchema>
export type PlotyParamsOutput = z.output<typeof plotlyPlotParamsSchema>
