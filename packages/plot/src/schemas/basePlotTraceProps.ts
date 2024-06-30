import { z } from "zod";

export const basePlotTraceProps = z.object({
    color: z.string().optional(),
    label: z.string()
})
