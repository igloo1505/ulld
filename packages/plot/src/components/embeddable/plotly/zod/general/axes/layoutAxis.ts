import { z } from "zod";
import {
    plotlyAxisName,
    plotlyAxisSide,
    plotlyConstrainToward,
    plotlyConstrainType,
    plotlyDashType,
    plotlyDirectionSchema,
    tickLabelModeSchema,
    tickLabelOverflowSchema,
    tickLabelPositionSchema,
    ticksOnSchema,
} from "../../general/utils";
import { plotlyAxisSchema } from "./plotlyAxis";
import { numberStringUnionSchema } from "../nonspecificUtilities";

const _plotlyLayoutAxisPropSchema = z.object({
    fixedrange: z.boolean(),
    scaleanchor: plotlyAxisName,
    constrain: plotlyConstrainType,
    constraintoward: plotlyConstrainToward,
    anchor: plotlyAxisName.or(z.literal("free")),
    side: plotlyAxisSide,
    domain: z.number().array(),
    position: z.number(),
    rotation: z.number(),
    direction: plotlyDirectionSchema,
    automargin: z.boolean(),
    autotick: z.boolean(),
    angle: z.any(),
    nticks: z.number().optional(),
    range: z.tuple([z.number(), z.number()]).optional(),
    griddash: plotlyDashType,
    matches: plotlyAxisName,
    insiderange: z.any().array(),
    ticklabelmode: tickLabelModeSchema,
    ticklabeloverflow: tickLabelOverflowSchema,
    ticklabelposition: tickLabelPositionSchema,
    ticklabelstep: z.number(),
    tickson: ticksOnSchema,
    uirevision: numberStringUnionSchema
});


export const plotlyLayoutAxisPropSchema = plotlyAxisSchema.merge(_plotlyLayoutAxisPropSchema)
