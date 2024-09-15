import { z } from "zod";
import { plotlyEditsSchema } from "./edits";
import { plotlyDoubleClickSchema } from "../utils";
import {
    plotlyModeBarButtonAnySchema,
    plotlyModeBarButtonSchema,
} from "../modebar";

export const plotlyImageExportFormat = z.union([
    z.literal("png"),
    z.literal("svg"),
    z.literal("jpeg"),
    z.literal("webp"),
]);

export const plotlyConfigSchema = z.object({
    toImageButtonOptions: z.object({
        filename: z.string(),
        scale: z.number(),
        format: plotlyImageExportFormat,
        height: z.number(),
        width: z.number(),
    }),
    staticPlot: z.boolean(),
    typesetMath: z.boolean(),
    plotlyServerURL: z.string().default(""),
    editable: z.boolean(),
    edits: plotlyEditsSchema.partial(),
    autosizable: z.boolean(),
    queueLength: z.number(),
    fillFrame: z.boolean(),
    frameMargins: z.boolean(),
    scrollZoom: z.boolean(),
    doubleClick: plotlyDoubleClickSchema,
    doubleClickDelay: z.number(),
    showTips: z.boolean(),
    showAxisDragHandles: z.boolean(),
    showAxisRangeEntryBoxes: z.boolean(),
    showLink: z.boolean().default(false),
    sendData: z.boolean(),
    linkText: z.string(),
    showSources: z.boolean(),
    displayModeBar: z.union([z.literal("hover"), z.boolean()]),
    showSendToCloud: z.boolean(),
    showEditInChartStudio: z.boolean().default(false),
    modeBarButtonsToRemove: z
        .union([plotlyModeBarButtonSchema, plotlyModeBarButtonSchema.array()])
        .transform((x) => (Array.isArray(x) ? x : [x])),
    modeBarButtonsToAdd: z
        .union([plotlyModeBarButtonAnySchema, plotlyModeBarButtonAnySchema.array()])
        .transform((x) => (Array.isArray(x) ? x : [x])),
    modeBarButtons: plotlyModeBarButtonAnySchema.array().array().or(z.literal(false)),
    displaylogo: z.boolean().default(false),
    plotGlPixelRatio: z.number(),
setBackground: z.union([
        z.function(),
        z.literal("opaque"),
        z.literal("transparent"),
    ]),
    topojsonURL: z.string(),
    mapboxAccessToken: z.string(),
    logging: z.union([
        z.boolean(),
        z.number().int().min(0).max(2),
    ]),
    globalTransforms: z.any().array(),
    locale: z.string(),
    locales: z.record(z.string(), z.any()).optional(),
    responsize: z.boolean().default(true),
    watermark: z.boolean().default(false)
});
