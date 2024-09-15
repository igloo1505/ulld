import { z } from "zod";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { NumericList } from "@ulld/math/list";
import { labelPositionSchema } from "./utilitySchemas";
import { plotThemes, plotThemeData } from "../../../../../colors";
import { ExtendedMath } from "@ulld/math/extendedMath";
import { plotFunction } from "../../../../../lib/schemas/functions/main";

export const xyPlotFunctionArgs = z.instanceof(ExtendedMath);

export const xAxisPropSchema = z.object({
  label: z.string().default("x"),
  tickLine: z.boolean().default(false),
  tickMargin: z.number().optional(),
  axisLine: z.boolean().default(false),
})


export const yAxisPropSchema = xAxisPropSchema.merge(
  z.object({
    label: z.string().default("y"),
  }),
)

export const gridProps = z.object({
  vertical: z.boolean().default(false),
  max: z.number().optional(),
  min: z.number().optional(),
  opacity: z.number().min(0).max(1).default(1),
  fill: z.string().optional(),
});

export const linePropsSchema = z.object({
  label: z.string(),
  color: z.string().optional(),
  f: z.function().args(z.number(), xyPlotFunctionArgs).returns(z.number()),
  type: z
    .string()
    .default("natural")
    .transform((x) =>
      curveTypes.includes(x as any)
        ? (x as (typeof curveTypes)[number])
        : (curveTypes[0] as (typeof curveTypes)[number]),
    ),
  thickness: z.number().default(2),
  dot: z.union([z.number(), z.boolean()]).default(false),
  id: z
    .string()
    .optional()
    .describe(
      "May be useful if issues arise with individual traces behaving erratically.",
    ),
});

export const storedLinePlotData = linePropsSchema
  .omit({
    f: true,
  })
  .extend({
    data: z.number().array(),
  });

const barLabelSchema = z.object({
  label: z.string(),
  offset: z.number().default(12),
  fontSize: z.number().default(12),
  muted: z.boolean().default(false),
  hide: z.boolean().default(false),
  position: labelPositionSchema,
});

export const barPropsSchema = z.object({
  label: z.union([z.string(), barLabelSchema]),
  color: z.string().optional(),
  f: plotFunction,
  radius: z.number().default(4),
  id: z.string().optional(),
});

export const storedBarPlotData = barPropsSchema
  .omit({
    f: true,
  })
  .extend({
    data: z.number().array(),
  });

const transformCssHeight = (val: number | string) => {
       return typeof val === "string" ? val : `${val}px` 
}

const cssHeightValue = z.union([
    z.string(),
    z.number()
])

export const xyPlotPropSchema = z
  .object({
    id: z.string().optional(),
    height: cssHeightValue.default(300).transform(transformCssHeight),
    minHeight: cssHeightValue.default(300).transform(transformCssHeight),
    grid: z
      .union([gridProps, z.boolean()])
      .default(false)
      .transform((x) => (x === true ? gridProps.parse({}) : x)),
    yAxis: z
      .union([yAxisPropSchema, z.boolean()])
      .default({})
      .transform((y) => (y === true ? yAxisPropSchema.parse({}) : y)),
    xAxis: z
      .union([xAxisPropSchema, z.boolean()])
      .default({})
      .transform((x) => (x === true ? xAxisPropSchema.parse({}) : x)),
    title: z.string().optional(),
    x: z.number().array().optional(),
    range: z.tuple([z.number(), z.number()]).default([-10, 10]),
    theme: z
      .enum(plotThemes)
      .default("high vis")
      .transform((x) => x.replaceAll(" ", "_") as keyof typeof plotThemeData),
    dataPoints: z.number().int().default(100),
    dx: z.number().optional(),
    plotItems: z
      .union([
        linePropsSchema.omit({
          f: true,
        }),
        barPropsSchema.omit({
          f: true,
        }),
      ])
      .array()
      .default([]),
  })
  .transform((data) => {
    let numericalData = data.x
      ? data.x
      : data.dx
        ? NumericList.fromRange(
            data.range[0],
            data.range[1],
            data.dx,
          ).value
        : NumericList.fromLinSpace(
            data.range[0],
            data.range[1],
            data.dataPoints,
          ).value;
    return {
      ...data,
      numericalData: {
        x: numericalData,
      } as Record<string, number[]>,
    };
  });

export type XYPlotProps = z.input<typeof xyPlotPropSchema>;
export type ParsedXYPlotProps = z.output<typeof xyPlotPropSchema>;

const curveTypes = [
  "natural",
  "basis",
  "basisClosed",
  "basisOpen",
  "bumpX",
  "bumpY",
  "bump",
  "linear",
  "linearClosed",
  "natural",
  "monotoneX",
  "monotoneY",
  "monotone",
  "step",
  "stepBefore",
  "stepAfter",
] as const;

// Handle the fill color with tinycolor when back on wifi in the AM. Use a muted version of whatever the line color is if it isn't provided by the user.
export const areaPropsSchema = linePropsSchema.merge(
  z.object({
    stackId: z.string().default("a"),
    fill: z.union([z.string(), z.boolean()]),
  }),
);

export type LineProps = z.input<typeof linePropsSchema>;
export type ParsedLineProps = z.output<typeof linePropsSchema>;
export type StoredLinePlot = z.output<typeof storedLinePlotData>;

export type XYFunctionArg = z.output<typeof xyPlotFunctionArgs>;

export type BarProps = z.input<typeof barPropsSchema>;
export type ParsedBarProps = z.input<typeof barPropsSchema>;
export type StoredBarPlot = z.output<typeof storedBarPlotData>;

export type XYTraceProps = LineProps | BarProps;
export type GridProps = z.output<typeof gridProps>

export type XAxisProps = z.output<typeof xAxisPropSchema>
export type YAxisProps = z.output<typeof yAxisPropSchema>
