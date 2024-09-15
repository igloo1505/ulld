import { z } from "zod";

export const plotlyIcon = z.object({
    height: z.number(),
    width: z.number(),
    ascent: z.number(),
    descent: z.number(),
    name: z.string(),
    path: z.string(),
    svg: z.string(),
    transform: z.string(),
}).partial()

export const modeBarButtonSchema = z.object({
    name: z.string(),
    title: z.string(),
    icon: z.union([
        z.string(),
        plotlyIcon
    ]),
    gravity: z.string().optional(),
    click: z.function(),
    attr: z.string().optional(),
    val: z.any().optional(),
    toggle: z.boolean().optional()
})
