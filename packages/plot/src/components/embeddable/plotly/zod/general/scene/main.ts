import { z } from "zod";
import { plotlyCameraSchema } from "./camera";
import { plotlyDomainSchema } from "./domain";
import { plotlyAspectMode, plotlyDragMode, plotlyPointSchema, plotlySceneDragMode } from "../utils";
import { plotlySceneAxis } from "../axes/sceneAxis";
import { plotlyAnnotationsSchema } from "../annotations";

export const plotlySceneSchema = z.object({
    bgcolor: z.string(),
    camera: plotlyCameraSchema.partial(),
    domain: plotlyDomainSchema.partial(),
    aspectmode: plotlyAspectMode,
    aspectratio: plotlyPointSchema,
    xaxis: plotlySceneAxis.partial(),
    yaxis: plotlySceneAxis.partial(),
    zaxis: plotlySceneAxis.partial(),
    dragmode: plotlySceneDragMode,
    hovermode: z.literal("closest").or(z.literal(false)),
    annotations: z.union([
        plotlyAnnotationsSchema.partial(),
        plotlyAnnotationsSchema.partial().array(),
    ]),
    captureevents: z.boolean()
})
