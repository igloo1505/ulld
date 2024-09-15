import { z } from "zod";

export const plotlyDomainSchema = z.object({
  x: z.number().array(),
  y: z.number().array(),
    row: z.number(),
    column: z.number(),
})
