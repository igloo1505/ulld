import { z } from "zod";
import { numberStringUnionSchema } from "./nonspecificUtilities";
import { plotlyTitleSchemaObject } from "./title";

export const plotlyAspectMode = z.union([
    z.literal("auto"),
    z.literal("cube"),
    z.literal("data"),
    z.literal("manual"),
]);

export const plotlyAxisRef = z.union([
    z.literal("container"),
    z.literal("paper"),
]);

export const plotlyAxisAnchor = z.union([
    z.literal("auto"),
    z.literal("left"),
    z.literal("center"),
    z.literal("right"),
]);

export const plotlyColorSchema = z.union([
    z.string(),
    z.number(),
    z.string().array(),
    z.number().array(),
    z.string().array().array(),
    z.number().array().array(),
]);

export const plotlyColorScaleSchema = z.union([
    z.string(),
    z.string().array(),
    z.union([z.string(), z.number()]).array(),
]);

export const plotlyFontSchema = z.object({
    family: z.string().optional(),
    size: z.number().optional(),
    color: plotlyColorSchema.optional(),
});

export const plotlyPadding = z
    .object({
        t: z.number().optional(),
        r: z.number().optional(),
        b: z.number().optional(),
        l: z.number().optional(),
        top: z.number().optional(),
        right: z.number().optional(),
        bottom: z.number().optional(),
        left: z.number().optional(),
    })
    .default({})
    .transform((x: any) => {
        if (x.top) {
            x.t = x.top;
        }
        if (x.bottom) {
            x.b = x.bottom;
        }
        if (x.right) {
            x.r = x.right;
        }
        if (x.left) {
            x.l = x.left;
        }
        return x;
    });

export const plotlyXAxisName = z.union([
    z.literal("x"),
    z.literal("x1"),
    z.literal("x2"),
    z.literal("x3"),
    z.literal("x4"),
    z.literal("x5"),
    z.literal("x6"),
    z.literal("x7"),
    z.literal("x8"),
    z.literal("x9"),
    z.literal("x10"),
    z.literal("x11"),
]);

export const plotlyYAxisName = z.union([
    z.literal("y"),
    z.literal("y1"),
    z.literal("y2"),
    z.literal("y3"),
    z.literal("y4"),
    z.literal("y5"),
    z.literal("y6"),
    z.literal("y7"),
    z.literal("y8"),
    z.literal("y9"),
    z.literal("y10"),
    z.literal("y11"),
]);

export const plotlyAxisName = plotlyXAxisName.or(plotlyYAxisName);

export const plotlyConstrainType = z.union([
    z.literal("range"),
    z.literal("domain"),
]);

export const plotlyConstrainToward = z.union([
    z.literal("left"),
    z.literal("center"),
    z.literal("right"),
    z.literal("top"),
    z.literal("middle"),
    z.literal("bottom"),
]);

export const plotlyDirectionSchema = z.union([
    z.literal("counterclockwise"),
    z.literal("clockwise"),
]);

export const plotlyAxisSide = z
    .union([
        z.literal("top"),
        z.literal("bottom"),
        z.literal("left"),
        z.literal("right"),
    ])
    .or(plotlyDirectionSchema);

export const plotlyDashType = z.union([
    z.literal("solid"),
    z.literal("dot"),
    z.literal("dash"),
    z.literal("longdash"),
    z.literal("dashdot"),
    z.literal("longdashdot"),
]);

export const tickLabelModeSchema = z.union([
    z.literal("instant"),
    z.literal("period"),
]);

export const tickLabelOverflowSchema = z.union([
    z.literal("allow"),
    z.literal("hide past div"),
    z.literal("hide past domain"),
]);

export const tickLabelPositionSchema = z.union([
    z.literal("outside"),
    z.literal("inside"),
    z.literal("outside top"),
    z.literal("inside top"),
    z.literal("outside left"),
    z.literal("inside left"),
    z.literal("outside right"),
    z.literal("inside right"),
    z.literal("outside bottom"),
    z.literal("inside bottom"),
]);

export const ticksOnSchema = z.union([
    z.literal("labels"),
    z.literal("boundaries"),
]);

export const plotlyTitlePosition = z.union([
    z.literal("top left"),
    z.literal("top center"),
    z.literal("top right"),
    z.literal("middle center"),
    z.literal("bottom left"),
    z.literal("bottom center"),
    z.literal("bottom right"),
]);

export const plotlyAxisTypeSchema = z.union([
    z.literal("-"),
    z.literal("linear"),
    z.literal("log"),
    z.literal("date"),
    z.literal("category"),
    z.literal("multicategory"),
]);

export const plotlyAutoRangeSchema = z.union([
    z.literal(true),
    z.literal(false),
    z.literal("reversed"),
    z.literal("min reversed"),
    z.literal("max reversed"),
    z.literal("min"),
    z.literal("max"),
]);

export const plotlyAutoRangeOptions = z.object({
    clipmax: numberStringUnionSchema,
    clipmin: numberStringUnionSchema,
    include: numberStringUnionSchema,
    maxallowed: numberStringUnionSchema,
    minallowed: numberStringUnionSchema,
});

export const plotlyRangeModeSchema = z.union([
    z.literal("tozero"),
    z.literal("normal"),
    z.literal("nonnegative"),
]);

export const plotlyTickModeSchema = z.union([
    z.literal("auto"),
    z.literal("linear"),
    z.literal("array"),
]);

export const plotlyCategoryOrderSchema = z.union([
    z.literal("trace"),
    z.literal("category ascending"),
    z.literal("category descending"),
    z.literal("array"),
    z.literal("total ascending"),
    z.literal("total descending"),
    z.literal("min ascending"),
    z.literal("min descending"),
    z.literal("max ascending"),
    z.literal("max descending"),
    z.literal("sum ascending"),
    z.literal("sum descending"),
    z.literal("mean ascending"),
    z.literal("mean descending"),
    z.literal("median ascending"),
    z.literal("median descending"),
]);

export const plotlyShowTickPrefixSchema = z.union([
    z.literal("all"),
    z.literal("first"),
    z.literal("last"),
    z.literal("none"),
]);

export const plotlyExponentFormatSchema = z.union([
    z.literal("none"),
    z.literal("e"),
    z.literal("E"),
    z.literal("power"),
    z.literal("SI"),
    z.literal("B"),
]);

export const plotlyCalendarSchema = z.union([
    z.literal("gregorian"),
    z.literal("chinese"),
    z.literal("coptic"),
    z.literal("discworld"),
    z.literal("ethiopian"),
    z.literal("hebrew"),
    z.literal("islamic"),
    z.literal("julian"),
    z.literal("mayan"),
    z.literal("nanakshahi"),
    z.literal("nepali"),
    z.literal("persian"),
    z.literal("jalali"),
    z.literal("taiwan"),
    z.literal("thai"),
    z.literal("ummalqura"),
]);

export const plotlySpikeModeSchema = z.union([
    z.literal("toaxis"),
    z.literal("across"),
    z.literal("marker"),
    z.literal("toaxis+across"),
    z.literal("toaxis+across+marker"),
    z.literal("across+marker"),
    z.literal("toaxis+marker"),
]);

export const plotlySpikeSnapSchema = z.union([
    z.literal("data"),
    z.literal("cursor"),
    z.literal("hovered data"),
]);

export const allPlotlyPlotTypes = z.union([
    z.literal("bar"),
    z.literal("barpolar"),
    z.literal("box"),
    z.literal("candlestick"),
    z.literal("carpet"),
    z.literal("choropleth"),
    z.literal("choroplethmapbox"),
    z.literal("cone"),
    z.literal("contour"),
    z.literal("contourcarpet"),
    z.literal("densitymapbox"),
    z.literal("funnel"),
    z.literal("funnelarea"),
    z.literal("heatmap"),
    z.literal("heatmapgl"),
    z.literal("histogram"),
    z.literal("histogram2d"),
    z.literal("histogram2dcontour"),
    z.literal("image"),
    z.literal("indicator"),
    z.literal("isosurface"),
    z.literal("mesh3d"),
    z.literal("ohlc"),
    z.literal("parcats"),
    z.literal("parcoords"),
    z.literal("pie"),
    z.literal("pointcloud"),
    z.literal("sankey"),
    z.literal("scatter"),
    z.literal("scatter3d"),
    z.literal("scattercarpet"),
    z.literal("scattergeo"),
    z.literal("scattergl"),
    z.literal("scattermapbox"),
    z.literal("scatterpolar"),
    z.literal("scatterpolargl"),
    z.literal("scatterternary"),
    z.literal("splom"),
    z.literal("streamtube"),
    z.literal("sunburst"),
    z.literal("surface"),
    z.literal("table"),
    z.literal("treemap"),
    z.literal("violin"),
    z.literal("volume"),
    z.literal("waterfall"),
]);

export const plotlyDatumSchema = z.union([
    z.string(),
    z.number(),
    z.date(),
    z.null(),
]);

export const plotlyTypedArraySchema = z.union([
    z.instanceof(Int8Array),
    z.instanceof(Uint8Array),
    z.instanceof(Int16Array),
    z.instanceof(Uint16Array),
    z.instanceof(Int32Array),
    z.instanceof(Uint32Array),
    z.instanceof(Uint8ClampedArray),
    z.instanceof(Float32Array),
    z.instanceof(Float64Array),
]);

export const currentlySupportedPlotlyPlotTypes = z.literal("surface");

export const plotlyTitleSchema = z.union([z.string(), plotlyTitleSchemaObject]);

export const plotlyLocationMode = z.union([
    z.literal("ISO-3"),
    z.literal("USA-states"),
    z.literal("country names"),
    z.literal("geojson-id"),
]);

export const plotlyLayoutHoverMode = z.union([
    z.literal("closest"),
    z.literal("x"),
    z.literal("y"),
    z.literal("x unified"),
    z.literal("y unified"),
    z.literal(false),
]);

export const plotlySceneDragMode = z.union([
    z.literal("zoom"),
    z.literal("pan"),
    z.literal("orbit"),
    z.literal("turntable"),
    z.literal(false),
]);

export const plotlyDragMode = z
    .union([z.literal("select"), z.literal("lasso")])
    .or(plotlySceneDragMode);

export const plotlyPointSchema = z.object({
    x: z.number(),
    y: z.number(),
    z: z.number(),
});

export const plotlyBarModeSchema = z.union([
    z.literal("stack"),
    z.literal("group"),
    z.literal("overlay"),
    z.literal("relative"),
]);

export const plotlyBarNormSchema = z.union([
    z.literal(""),
    z.literal("fraction"),
    z.literal("percent"),
]);

export const plotlySelectDirectionSchema = z.union([
    z.literal("h"),
    z.literal("v"),
    z.literal("d"),
    z.literal("any"),
]);

export const plotlyDoubleClickSchema = z.union([
    z.literal("reset+autosize"),
    z.literal("reset"),
    z.literal("autosize"),
    z.literal(false),
]);
