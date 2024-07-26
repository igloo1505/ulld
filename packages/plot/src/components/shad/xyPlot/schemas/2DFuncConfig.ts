import {z} from 'zod'

export const twoDFuncConfig = z.object({
   range: z.union([
        z.number(),
        z.number().array().length(2)
    ]).default([-10, 10]).transform((x) => {
        if(typeof x === "number"){
            return [x, x]
        }
        return x
    }),
    dataPoints: z.number().int().default(100)
})


export type TwoDFuncConfig = z.input<typeof twoDFuncConfig>
export type TwoDFuncConfigOutput = z.output<typeof twoDFuncConfig>
