import { z } from "zod";

export const xyPlotFunctionArgs = z.object({
      x: z.number()
})

export const xAxisPropSchema = z.object({
    label: z.string().default("x"),
    tickLine: z.boolean().default(false),
    tickMargin: z.number().nullish(),
    axisLine: z.boolean().default(false)
})


export const yAxisPropSchema = xAxisPropSchema.merge(z.object({
    label: z.string().default("y")
}))


export const gridProps = z.object({
    vertical: z.boolean().default(false),
    max: z.number().optional(),
    min: z.number().optional(),
    opacity: z.number().min(0).max(1).default(1),
    fill: z.string().optional()
})

export const xyPlotPropSchema = z.object({
    grid: z.union([
        gridProps,
        z.boolean()
    ]).default(false).transform((x) => x === true ? gridProps.parse({}) : x),
    yAxis: z.union([
        yAxisPropSchema,
        z.boolean()
    ]).default({}).transform((y) => y === true ? yAxisPropSchema.parse({}) : y),
    xAxis: z.union([
        xAxisPropSchema,
        z.boolean()
    ]).default({}).transform((x) => x === true ? xAxisPropSchema.parse({}) : x),
    range: z.tuple([z.number(), z.number()]).default([-10, 10]),
    theme: z.union([

    ])
})

export type XYPlotProps = z.input<typeof xyPlotPropSchema>
export type ParsedXYPlotProps = z.output<typeof xyPlotPropSchema>


export const linePropsSchema = z.object({
    label: z.string(),
    color: z.string().optional(),
    f: z.function().args(xyPlotFunctionArgs).returns(z.number())
})

export type LineProps = z.input<typeof linePropsSchema>
export type ParsedLineProps = z.output<typeof linePropsSchema>
