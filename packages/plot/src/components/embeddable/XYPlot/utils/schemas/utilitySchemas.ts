import { z } from "zod";

const labelPositions = [
    "top",
    "left",
    "right",
    "bottom",
    "inside",
    "outside",
    "insideLeft",
    "insideRight",
    "insideTop",
    "insideBottom",
    "insideTopLeft",
    "insideBottomLeft",
    "insideTopRight",
    "insideBottomRight",
    "insideStart",
    "insideEnd",
    "end",
    "center",
    "centerTop",
    "centerBottom",
    "middle",
];

export const labelPositionSchema = z
    .union([
        z.string(),
        z.object({
            x: z.number().optional(),
            y: z.number().optional(),
        }),
    ])
    .transform((x) =>
        typeof x === "string" && labelPositions.includes(x)
            ? x
            : typeof x === "object"
                ? x
                : "top",
    );
