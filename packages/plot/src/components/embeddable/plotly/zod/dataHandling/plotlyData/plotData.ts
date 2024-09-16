import { z } from "zod";
import {
    allPlotlyPlotTypes,
    plotlyColorScaleSchema,
    plotlyColorSchema,
    plotlyDashType,
    plotlyDatumSchema,
    plotlyDirectionSchema,
    plotlyFontSchema,
    plotlyLocationMode,
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
import { PlotData, PlotMarker } from "plotly.js";
import { PlotMarkerHack } from "../../../types/main";
import { plotlyPlotFunction } from "../plotFunction";
import { plotFunction } from "../../../../../../lib/schemas/functions/main";
import { plotInputAxisFunction } from "../utils";
import { NumericList } from "@ulld/math/list";

export const axisData = z.union([
    plotlyDatumSchema.array(),
    plotlyDatumSchema.array().array(),
    plotlyTypedArraySchema,
]);

const inputAxisData = z
    .union([axisData, plotInputAxisFunction])
    .transform((t) => {
        if (typeof t === "function") {
            let v = t(new NumericList());
            if (v instanceof NumericList) {
                return v.value;
            } else {
                return v;
            }
        }
        return t
    });


// TODO: Need to transform this after parsing other stuff. Need to find method in zod to preparse params, but can't do that with the amount of battery left and without an internet connection.
const outputAxisData = z
    .union([axisData, plotFunction])



type ModifiedPlotData = Omit<PlotData, "marker"> & {
    marker: Partial<PlotMarkerHack>;
};

// : z.ZodType<ModifiedPlotData> Have to temporarily disable type checking to infer types elsewhere for some reason.
export const plotlyPlotDataSchema = z.object({
    type: allPlotlyPlotTypes.optional(),
    x: inputAxisData,
    y: outputAxisData,
    z: axisData.optional(),
    i: plotlyTypedArraySchema.optional(),
    j: plotlyTypedArraySchema.optional(),
    k: plotlyTypedArraySchema.optional(),
    xy: z.instanceof(Float32Array).optional(),
    // error_x: ErrorBar; // Need to handle this type with zod.
    // error_y: ErrorBar;
    xaxis: z.string().optional(),
    yaxis: z.string().optional(),
    text: stringOrStringArraySchema.optional(),
    lat: plotlyDatumSchema.array().optional(),
    lon: plotlyDatumSchema.array().optional(),
    line: plotlyScatterLineSchema.partial().optional(),
    "line.color": plotlyColorSchema.optional(),
    "line.width": z.number().optional(),
    "line.dash": plotlyDashType.optional(),
    "line.shape": z
        .union([
            z.literal("linear"),
            z.literal("spline"),
            z.literal("hv"),
            z.literal("vh"),
            z.literal("hvh"),
            z.literal("vhv"),
        ])
        .optional(),
    "line.smoothing": z.number().optional(),
    "line.simplify": z.boolean().optional(),
    marker: z.union([plotlyMarkerSchema, plotlyBoxPlotMarkerSchema]).optional(),
    "marker.symbol": markerSymbolSchema.optional(),
    "marker.color": plotlyColorSchema.optional(),
    "marker.colors": plotlyColorSchema.array().optional(),
    "marker.colorscale": plotlyColorScaleSchema.optional(),
    "marker.opacity": numberOrNumberArraySchema.optional(),
    "marker.size": numberOrNumberArraySchema.optional(),
    "marker.maxdisplayed": z.number().optional(),
    "marker.sizeref": z.number().optional(),
    "marker.sizemax": z.number().optional(),
    "marker.sizemode": z
        .union([z.literal("diameter"), z.literal("area")])
        .optional(),
    "marker.line": plotlyScatterMarkerLineSchema.partial().optional(),
    "marker.line.color": plotlyColorSchema.optional(),
    "marker.line.colorscale": plotlyColorScaleSchema.optional(),
    "marker.pad.t": z.number().optional(),
    "marker.pad.b": z.number().optional(),
    "marker.pad.r": z.number().optional(),
    "marker.pad.l": z.number().optional(),
    mode: plotlyDataModeSchema.optional(),
    histfunc: plotlyDataHistFuncSchema.optional(),
    histnorm: plotlyDataHistNormSchema.optional(),
    hoveron: plotlyDataHoverOnSchema.optional(),
    hoverinfo: plotlyDataHoverInfoSchema.optional(),
    hoverlabel: plotlyHoverLabelSchema.partial().optional(),
    hovertemplate: stringOrStringArraySchema.optional(),
    hovertext: stringOrStringArraySchema.optional(),
    xhoverformat: z.string().optional(),
    yhoverformat: z.string().optional(),
    zhoverformat: z.string().optional(),
    texttemplate: stringOrStringArraySchema.optional(),
    textinfo: plotlyDataTextInfo.optional(),
    textposition: plotlyDataTextPosition.optional(),
    textfont: plotlyFontSchema.partial().optional(),
    textangle: z.union([z.literal("auto"), z.number()]).optional(),
    insidetextanchor: z
        .union([z.literal("end"), z.literal("middle"), z.literal("start")])
        .optional(),
    constraintext: plotlyDataConstrainTextSchema.optional(),
    fill: plotlyDataFillSchema.optional(),
    fillcolor: z.string().optional(),
    fillpattern: plotlyPatternSchema.optional(),
    showlegend: z.boolean().optional(),
    legendgroup: z.string().optional(),
    legendgrouptitle: z
        .object({
            text: z.string(),
            font: plotlyFontSchema.partial(),
        })
        .optional(),
    legendrank: z.number().optional(),
    parents: z.string().array().optional(),
    name: z.string().optional(),
    stackgroup: z.string().optional(),
    groupnorm: z
        .union([z.literal(""), z.literal("fraction"), z.literal("percent")])
        .optional(),
    stackgaps: z
        .union([z.literal("infer zero"), z.literal("interpolate")])
        .optional(),
    connectgaps: z.boolean().optional(),
    visible: z.union([z.boolean(), z.literal("legendonly")]).optional(),
    // delta: Partial<Delta> // TODO: Handle this
    // gauge: Partial<Gauge> // TODO: Handle this
    // number: Partial<PlotNumber> // TODO: Handle this
    // transforms: DataTransform[] // TODO: Handle this
    orientation: z.union([z.literal("v"), z.literal("h")]).optional(),
    width: numberOrNumberArraySchema.optional(),
    boxmean: z.union([z.boolean(), z.literal("sd")]).optional(),
    boxpoints: z
        .union([
            z.literal("all"),
            z.literal("outliers"),
            z.literal("suspectedoutliers"),
            z.literal(false),
        ])
        .optional(),
    jitter: z.number().optional(),
    pointpos: z.number().optional(),
    opacity: z.number().optional(),
    showscale: z.boolean().optional(),
    colorscale: plotlyColorScaleSchema.optional(),
    zsmooth: z
        .union([z.literal("fast"), z.literal("best"), z.literal(false)])
        .optional(),
    zmin: z.number().optional(),
    zmax: z.number().optional(),
    ygap: z.number().optional(),
    xgap: z.number().optional(),
    transpose: z.boolean().optional(),
    autobinx: z.boolean().optional(),
    xbins: z
        .object({
            start: numberStringUnionSchema,
            end: numberStringUnionSchema,
            size: numberStringUnionSchema,
        })
        .optional(),
    value: z.number().optional(),
    values: plotlyDatumSchema.array().optional(),
    labels: plotlyDatumSchema.array().optional(),
    direction: plotlyDirectionSchema.optional(),
    hole: z.number().optional(),
    rotation: z.number().optional(),
    theta: plotlyDatumSchema.array().optional(),
    r: plotlyDatumSchema.array().optional(),
    customdata: z
        .union([plotlyDatumSchema.array(), plotlyDatumSchema.array().array()])
        .optional(),
    selectedpoints: plotlyDatumSchema.array().optional(),
    domain: z
        .object({
            row: z.number(),
            column: z.number(),
            x: z.number().array(),
            y: z.number().array(),
        })
        .partial()
        .optional(),
    title: plotlyDataTitleObjectSchema.partial().optional(),
    branchvalues: z
        .union([z.literal("total"), z.literal("remainder")])
        .optional(),
    ids: z.string().array().optional(),
    level: z.string().optional(),
    cliponaxis: z.boolean().optional(),
    automargin: z.boolean().optional(),
    locationmode: plotlyLocationMode.optional(),
    locations: plotlyDatumSchema.array().optional(),
    reversescale: z.boolean().optional(),
    // colorbar: ColorBar // TODO: Handle this
    offset: numberOrNumberArraySchema.optional(),
    contours: plotlyContoursSchema.partial().optional(),
    autocontour: z.boolean().optional(),
    ncontours: z.number().optional(),
    uirevision: numberStringUnionSchema.optional(),
    uid: z.string().optional(),
});
