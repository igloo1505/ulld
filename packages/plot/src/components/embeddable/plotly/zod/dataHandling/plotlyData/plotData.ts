import { z } from "zod";
import {
    currentlySupportedPlotlyPlotTypes,
    plotlyColorScaleSchema,
    plotlyColorSchema,
    plotlyDashType,
    plotlyDatumSchema,
    plotlyDirectionSchema,
    plotlyFontSchema,
    plotlyLocationMode,
    plotlyPadding,
    plotlyTypedArraySchema,
} from "../../general/utils";
import {
    numberOrNumberArraySchema,
    numberStringUnionSchema,
    stringOrStringArraySchema,
} from "../../general/nonspecificUtilities";
import {
    markerSymbolSchema,
    plotlyBoxPlotMarkerSchema,
    plotlyMarkerSchema,
} from "../../traceElements/marker";
import { plotlyPatternSchema } from "../../traceElements/pattern";
import { plotlyScatterMarkerLineSchema } from "../../traceElements/scatterMarkerLine";
import {
    plotlyDataConstrainTextSchema,
    plotlyDataFillSchema,
    plotlyDataHistFuncSchema,
    plotlyDataHistNormSchema,
    plotlyDataHoverInfoSchema,
    plotlyDataHoverOnSchema,
    plotlyDataModeSchema,
    plotlyDataTextInfo,
    plotlyDataTextPosition,
} from "./plotDataUtils";
import { plotlyHoverLabelSchema } from "../../interaction/hoverLabel";
import { plotlyDataTitleObjectSchema } from "../../general/title";
import { plotlyContoursSchema } from "../../general/contours";
import { plotlyScatterLineSchema } from "../../traceElements/scatterLine";

export const axisData = z.union([
    plotlyDatumSchema.array(),
    plotlyDatumSchema.array().array(),
]);

export const plotlyPlotDataSchema = z.object({
    type: currentlySupportedPlotlyPlotTypes,
    x: axisData,
    y: axisData,
    z: axisData,
    i: plotlyTypedArraySchema,
    j: plotlyTypedArraySchema,
    k: plotlyTypedArraySchema,
    xy: z.instanceof(Float32Array),
    // error_x: ErrorBar; // Need to handle this type with zod.
    // error_y: ErrorBar;
    xaxis: z.string(),
    yaxis: z.string(),
    text: stringOrStringArraySchema,
    lat: plotlyDatumSchema,
    lon: plotlyDatumSchema,
    line: plotlyScatterLineSchema.partial(),
    "line.color": plotlyColorSchema,
    "line.width": z.number(),
    "line.dash": plotlyDashType,
    "line.shape": z.union([
        z.literal("linear"),
        z.literal("spline"),
        z.literal("hv"),
        z.literal("vh"),
        z.literal("hvh"),
        z.literal("vhv"),
    ]),
    "line.smoothing": z.number(),
    "line.simplify": z.boolean(),
    marker: z.union([plotlyMarkerSchema, plotlyBoxPlotMarkerSchema]),

    "marker.symbol": markerSymbolSchema,
    "marker.color": z
        .union([plotlyColorSchema, plotlyColorSchema.array()])
        .optional(),
    "marker.colors": plotlyColorSchema.array().optional(),
    "marker.colorscale": plotlyColorScaleSchema.optional(),
    "marker.opacity": numberOrNumberArraySchema,
    "marker.size": numberOrNumberArraySchema,
    "marker.maxdisplayed": z.number().optional(),
    "marker.sizeref": z.number().optional(),
    "marker.sizemax": z.number().optional(),
    "marker.sizemode": z
        .union([z.literal("diameter"), z.literal("area")])
        .optional(),
    "marker.line": plotlyScatterMarkerLineSchema.partial(),
    "marker.line.color": plotlyColorSchema,
    "marker.line.colorscale": plotlyColorScaleSchema,
    "marker.pad.t": z.number(),
    "marker.pad.b": z.number(),
    "marker.pad.r": z.number(),
    "marker.pad.l": z.number(),
    mode: plotlyDataModeSchema,
    histfunc: plotlyDataHistFuncSchema,
    histnorm: plotlyDataHistNormSchema,
    hoveron: plotlyDataHoverOnSchema,
    hoverinfo: plotlyDataHoverInfoSchema,
    hoverlabel: plotlyHoverLabelSchema.partial(),
    hovertemplate: stringOrStringArraySchema,
    hovertext: stringOrStringArraySchema,
    xhoverformat: z.string(),
    yhoverformat: z.string(),
    zhoverformat: z.string(),
    texttemplate: stringOrStringArraySchema,
    textinfo: plotlyDataTextInfo,
    textposition: plotlyDataTextPosition,
    textfont: plotlyFontSchema.partial(),
    textangle: z.union([z.literal("auto"), z.number()]),
    insidetextanchor: z.union([
        z.literal("end"),
        z.literal("middle"),
        z.literal("start"),
    ]),
    constraintext: plotlyDataConstrainTextSchema,
    fill: plotlyDataFillSchema,
    fillcolor: z.string(),
    fillpattern: plotlyPatternSchema,
    showlegend: z.boolean(),
    legendgroup: z.string(),
    legendgrouptitle: z.object({
        text: z.string(),
        font: plotlyFontSchema.partial(),
    }),
    legendrank: z.number(),
    parents: z.string().array(),
    name: z.string(),
    stackgroup: z.string(),
    groupnorm: z.union([
        z.literal(""),
        z.literal("fraction"),
        z.literal("percent"),
    ]),
    stackgaps: z.union([z.literal("infer zero"), z.literal("interpolate")]),
    connectgaps: z.boolean(),
    visible: z.union([z.boolean(), z.literal("legendonly")]),
    // delta: Partial<Delta> // TODO: Handle this
    // gauge: Partial<Gauge> // TODO: Handle this
    // number: Partial<PlotNumber> // TODO: Handle this
    // transforms: DataTransform[] // TODO: Handle this
    orientation: z.union([z.literal("v"), z.literal("h")]),
    width: numberOrNumberArraySchema,
    boxmean: z.union([z.boolean(), z.literal("sd")]),
    boxpoints: z.union([
        z.literal("all"),
        z.literal("outliers"),
        z.literal("suspectedoutliers"),
        z.literal(false),
    ]),
    jitter: z.number(),
    pointpos: z.number(),
    opacity: z.number(),
    showscale: z.number(),
    colorscale: plotlyColorScaleSchema,
    zsmooth: z.union([z.literal("fast"), z.literal("best"), z.literal(false)]),
    zmin: z.number(),
    zmax: z.number(),
    ygap: z.number(),
    xgap: z.number(),
    transpose: z.boolean(),
    autobinx: z.boolean(),
    xbins: z.object({
        start: numberStringUnionSchema,
        end: numberStringUnionSchema,
        size: numberStringUnionSchema,
    }),
    value: z.number(),
    values: plotlyDatumSchema.array(),
    labels: plotlyDatumSchema.array(),
    direction: plotlyDirectionSchema,
    hole: z.number(),
    rotation: z.number(),
    theta: plotlyDatumSchema.array(),
    r: plotlyDatumSchema.array(),
    customdata: z.union([
        plotlyDatumSchema.array(),
        plotlyDatumSchema.array().array(),
    ]),
    selectedpoints: plotlyDatumSchema.array(),
    domain: z
        .object({
            row: z.number(),
            column: z.number(),
            x: z.number().array(),
            y: z.number().array(),
        })
        .partial(),
    title: plotlyDataTitleObjectSchema.partial(),
    branchvalues: z.union([z.literal("total"), z.literal("remainder")]),
    ids: z.string().array(),
    level: z.string(),
    cliponaxis: z.boolean(),
    automargin: z.boolean(),
    locationmode: plotlyLocationMode,
    locations: plotlyDatumSchema.array(),
    reversescale: z.boolean(),
    // colorbar: ColorBar // TODO: Handle this
    offset: numberOrNumberArraySchema,
    contours: plotlyContoursSchema.partial(),
    autocontour: z.boolean(),
    ncontours: z.number(),
    uirevision: numberStringUnionSchema,
    uid: z.string()
});
