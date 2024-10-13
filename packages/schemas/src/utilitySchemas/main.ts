import { z } from "zod"

export const zodOptStr = z.string().nullish()
export const zodOptNum = z.number().nullish()

