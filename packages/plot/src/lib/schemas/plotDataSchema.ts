import { z } from "zod";
import { plotTypeSchema } from "./plotTypeSchema";
import { plotlyMarkerSchema } from "./markerSchema";
import { dataTitleSchema } from "./titleSchema";
import { colorbarSchema } from "./colorbarSchema";

const scatterLineSchema = z.object({
  color: z.string().default("hsl(var(--primary))"),
  width: z.number().optional(),
  dash: z
    .union([
      z.literal("solid"),
      z.literal("dot"),
      z.literal("dash"),
      z.literal("longdash"),
      z.literal("dashdot"),
      z.literal("longdashdot"),
    ])
    .optional(),
  shape: z.union([
    z.literal("linear"),
    z.literal("spline"),
    z.literal("hv"),
    z.literal("vh"),
    z.literal("hvh"),
    z.literal("vhv"),
  ]).optional(),
  smoothing: z.number().optional(),
  simplify: z.boolean().optional(),
});


export const modeSchema = z
      .union([
        z.literal("lines"),
        z.literal("markers"),
        z.literal("text"),
        z.literal("lines+markers"),
        z.literal("text+markers"),
        z.literal("text+lines"),
        z.literal("text+lines+markers"),
        z.literal("none"),
        z.literal("gauge"),
        z.literal("number"),
        z.literal("delta"),
        z.literal("number+delta"),
        z.literal("gauge+number"),
        z.literal("gauge+number+delta"),
        z.literal("gauge+delta"),
      ])


export const plotDataSchema = z
  .object({
    type: plotTypeSchema,
    line: scatterLineSchema.default({}),
    marker: plotlyMarkerSchema.default({}),
    color: z.string().optional(),
    x: z.number().array().default([]),
    y: z.number().array().default([]),
    mode: modeSchema.optional(),
    histfunc: z
      .union([
        z.literal("count"),
        z.literal("sum"),
        z.literal("avg"),
        z.literal("min"),
        z.literal("max"),
      ])
      .optional(),
    histnorm: z
      .union([
        z.literal(""),
        z.literal("percent"),
        z.literal("probability"),
        z.literal("density"),
        z.literal("probability density"),
      ])
      .optional(),
    hoveron: z.union([z.literal("points"), z.literal("fills")]).optional(),
    hoverinfo: z
      .union([
        z.literal("all"),
        z.literal("name"),
        z.literal("none"),
        z.literal("skip"),
        z.literal("text"),
        z.literal("x"),
        z.literal("x+text"),
        z.literal("x+name"),
        z.literal("x+y"),
        z.literal("x+y+text"),
        z.literal("x+y+name"),
        z.literal("x+y+z"),
        z.literal("x+y+z+text"),
        z.literal("x+y+z+name"),
        z.literal("y"),
        z.literal("y+name"),
        z.literal("y+x"),
        z.literal("y+text"),
        z.literal("y+x+text"),
        z.literal("y+x+name"),
        z.literal("y+z"),
        z.literal("y+z+text"),
        z.literal("y+z+name"),
        z.literal("y+x+z"),
        z.literal("y+x+z+text"),
        z.literal("y+x+z+name"),
        z.literal("z"),
        z.literal("z+x"),
        z.literal("z+x+text"),
        z.literal("z+x+name"),
        z.literal("z+y+x"),
        z.literal("z+y+x+text"),
        z.literal("z+y+x+name"),
        z.literal("z+x+y"),
        z.literal("z+x+y+text"),
        z.literal("z+x+y+name"),
      ])
      .optional(),
    fill: z
      .union([
        z.literal("none"),
        z.literal("tozeroy"),
        z.literal("tozerox"),
        z.literal("tonexty"),
        z.literal("tonextx"),
        z.literal("toself"),
        z.literal("tonext"),
      ])
      .optional(),
    fillcolor: z.string().optional(),
    hide: z.boolean().optional(),
    showlegend: z.boolean().default(true),
    name: z.string().optional(),
    label: z.string().optional(),
    visible: z.union([
      z.boolean(),
      z.literal("legend"),
      z.literal("legendonly"),
    ]).default(true).transform((a) => a === "legend" ? "legendonly" : a),
    opacity: z.number().default(1),
    showscale: z.boolean().optional(),
    zmin: z.number().optional(),
    zmax: z.number().optional(),
    title: dataTitleSchema.optional(),
    locationmode: z.union([
      z.literal("ISO-3"),
      z.literal("USA-states"),
      z.literal("country names"),
      z.literal("geojson-id"),
    ]).default("USA-states"),
    colorbar: colorbarSchema.default({})
  })




export type PlotDataInput = z.input<typeof plotDataSchema>
export type PlotDataOutput = z.output<typeof plotDataSchema>
