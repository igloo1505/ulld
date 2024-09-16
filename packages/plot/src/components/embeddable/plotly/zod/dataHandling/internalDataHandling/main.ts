import { z } from "zod";
import { plotlyDataSchema } from "../plotlyData/plotlyData";
import { plotlyDataAxisRange } from "../utils";
import { plotlyPlotFunction } from "../plotFunction";
import { PlotParams } from "react-plotly.js";
import { ExtendedMath } from "@ulld/math/extendedMath";
import {getAppConfigClientSide} from "@ulld/utilities/getAppConfigClientSide"
import { Data } from "plotly.js";

const _plotlyInternalDataHandlerSchema = z.object({
    x: plotlyDataAxisRange,
    f: z
        .union([plotlyPlotFunction, plotlyPlotFunction.array()])
        .transform((x) => (Array.isArray(x) ? x : [x])),
})


export const plotlyInternalDataHandlerSchema = plotlyDataSchema.merge(_plotlyInternalDataHandlerSchema).transform((x): Data[] => {
    const appConfig = getAppConfigClientSide()
    let extendedMath = new ExtendedMath(appConfig?.math?.constants || {})
     let data: Data[] = x.f.map((f) => {
        return {
            ...f,
            y: x.x.map((n) => f.f(n, extendedMath))
        }
    })
    return data
})
