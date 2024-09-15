import {z} from 'zod'
import { plotlyPlotType3dSchema } from './3d/main'

const plotlyTraceType = plotlyPlotType3dSchema

const plotlyTraceProps = z.object({
    type: plotlyTraceType,
    opacity: z.number().min(0).max(1).default(1)
})

export const plotlyPlotProps = z.object({
    plots: plotlyTraceProps.array().min(1)
})
