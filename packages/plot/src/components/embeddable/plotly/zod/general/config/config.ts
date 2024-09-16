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
    }).optional(),
    staticPlot: z.boolean().optional(),
    typesetMath: z.boolean().optional(),
    plotlyServerURL: z.string().default(""),
    editable: z.boolean().optional(),
    edits: plotlyEditsSchema.partial().optional(),
    autosizable: z.boolean().optional(),
    queueLength: z.number().optional(),
    fillFrame: z.boolean().optional(),
    frameMargins: z.boolean().optional(),
    scrollZoom: z.boolean().optional(),
    doubleClick: plotlyDoubleClickSchema.optional(),
    doubleClickDelay: z.number().optional(),
    showTips: z.boolean().optional(),
    showAxisDragHandles: z.boolean().optional(),
    showAxisRangeEntryBoxes: z.boolean().optional(),
    showLink: z.boolean().default(false),
    sendData: z.boolean().optional(),
    linkText: z.string().optional(),
    showSources: z.boolean().optional(),
    displayModeBar: z.union([z.literal("hover"), z.boolean()]).optional(),
    showSendToCloud: z.boolean().optional(),
    showEditInChartStudio: z.boolean().default(false),
    modeBarButtonsToRemove: z
        .union([plotlyModeBarButtonSchema, plotlyModeBarButtonSchema.array()])
    .optional()
        .transform((x) => x ? Array.isArray(x) ? x : [x] : undefined),
    modeBarButtonsToAdd: z
        .union([plotlyModeBarButtonAnySchema, plotlyModeBarButtonAnySchema.array()])
    .optional()
        .transform((x) => x ? Array.isArray(x) ? x : [x] : undefined),
    modeBarButtons: plotlyModeBarButtonAnySchema.array().array().or(z.literal(false)).optional(),
    displaylogo: z.boolean().default(false),
    plotGlPixelRatio: z.number().optional(),
setBackground: z.union([
        z.function(),
        z.literal("opaque"),
        z.literal("transparent"),
    ]).optional(),
    topojsonURL: z.string().optional(),
    mapboxAccessToken: z.string().optional(),
    logging: z.union([
        z.boolean(),
        z.number().int().min(0).max(2),
    ]).optional(),
    globalTransforms: z.any().array().optional(),
    locale: z.string().optional(),
    locales: z.record(z.string(), z.any()).optional(),
    responsize: z.boolean().default(true),
    watermark: z.boolean().default(false)
});
