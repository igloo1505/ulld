import { z } from "zod";
import { plotlyColorSchema } from "./utils";
import { numberStringUnionSchema } from "./nonspecificUtilities";
import { modeBarButtonSchema } from "./modeBarButton";

export const plotlyModeBarButtonSchema = z.union([
    z.literal("lasso2d"),
    z.literal("select2d"),
    z.literal("sendDataToCloud"),
    z.literal("zoom2d"),
    z.literal("pan2d"),
    z.literal("zoomIn2d"),
    z.literal("zoomOut2d"),
    z.literal("autoScale2d"),
    z.literal("resetScale2d"),
    z.literal("hoverClosestCartesian"),
    z.literal("hoverCompareCartesian"),
    z.literal("zoom3d"),
    z.literal("pan3d"),
    z.literal("orbitRotation"),
    z.literal("tableRotation"),
    z.literal("handleDrag3d"),
    z.literal("resetCameraDefault3d"),
    z.literal("resetCameraLastSave3d"),
    z.literal("hoverClosest3d"),
    z.literal("zoomInGeo"),
    z.literal("zoomOutGeo"),
    z.literal("resetGeo"),
    z.literal("hoverClosestGeo"),
    z.literal("hoverClosestGl2d"),
    z.literal("hoverClosestPie"),
    z.literal("toggleHover"),
    z.literal("toImage"),
    z.literal("resetViews"),
    z.literal("toggleSpikelines"),
    z.literal("zoomInMapbox"),
    z.literal("zoomOutMapbox"),
    z.literal("resetViewMapbox"),
    z.literal("togglespikelines"),
    z.literal("togglehover"),
    z.literal("hovercompare"),
    z.literal("hoverclosest"),
    z.literal("v1hovermode"),
]);

export const plotlyModeBarButtonAnySchema = z.union([
    plotlyModeBarButtonSchema,
    modeBarButtonSchema
])

export const plotlyModeBarSchema = z.object({
    activecolor: plotlyColorSchema,
    add: z.union([plotlyModeBarButtonSchema, plotlyModeBarButtonSchema.array()]),
    bgcolor: plotlyColorSchema,
    color: plotlyColorSchema,
    orientation: z.literal("v").or(z.literal("h")),
    remove: z.union([plotlyModeBarButtonSchema, plotlyModeBarButtonSchema.array()]),
    uirevision: numberStringUnionSchema,
    uid: z.string()
});
