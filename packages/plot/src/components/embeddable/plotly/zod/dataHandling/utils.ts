import { z } from "zod";

export const plotlyDataMinMaxObject = z.object({
    n: z.number().default(100),
    dataPoints: z.number().optional(),
    min: z.number().default(0),
    max: z.number().default(10)
}).transform((x) => {
    if(x.dataPoints){
        x.n = x.dataPoints
    }
    return x
})


export const plotlyDataMinMaxRange = z.tuple([
    z.number(), z.number()
]).transform((x) => plotlyDataMinMaxObject.parse({
    min: x[0],
    max: x[1],
}))

export const plotlyDataAxisRange = z.union([
    plotlyDataMinMaxRange,
    plotlyDataMinMaxObject,
    z.number().transform((x) => plotlyDataMinMaxObject.parse({
        min: -x,
        max: x
    }))
])
