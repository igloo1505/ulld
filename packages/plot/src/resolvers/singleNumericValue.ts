import { z } from "zod";

export const singleNumericValueResolver = z.object({
    value: z.coerce.number()
})

export type SingleNumericValueResolver = z.infer<typeof singleNumericValueResolver>
