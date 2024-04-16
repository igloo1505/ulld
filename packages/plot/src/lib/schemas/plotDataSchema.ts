import {z} from 'zod'
import { plotTypeSchema } from './plotTypeSchema'


const scatterLineSchema = z.object({
    color: z.string().optional(),
    width: z.number().default(1),
    dash: z.union([
z.literal( "solid" ),
z.literal( "dot" ),
z.literal( "dash" ),
z.literal( "longdash" ),
z.literal( "dashdot" ),
z.literal( "longdashdot"),
    ])
})

export const plotDataSchema = z.object({
    type: plotTypeSchema,
    line: 
})
