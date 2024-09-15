import { z } from "zod";
import { plotFunction } from "../../../../../lib/schemas/functions/main";

export const plotlyPlotFunctionObject = z.object({
    f: plotFunction,
    title: z.string().optional(),
    label: z.string().optional(),
})


export const plotlyPlotFunction = z.union([
    plotFunction,
    plotlyPlotFunctionObject
]).transform((x) => {
     if(typeof x === "function"){
        return plotlyPlotFunctionObject.parse({
            f: x
        })
    }
    return x
})
