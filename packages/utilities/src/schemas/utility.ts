import dayjs from "dayjs"
import { z } from "zod"

export const zodOptStr = z.string().optional().nullable()
export const zodOptNum = z.number().optional().nullable()

export const zodOptBool = (defVal: boolean) => z.union([z.boolean(), z.string()]).optional().nullable().default(defVal).transform(a => typeof a === "boolean" ? a : a === "true")


export const zodCoerceToDate = (optional: boolean = false, defaultReturn?: any) => {
    if (optional) {
        return z.union([z.string().datetime(), z.number(), z.date()]).optional().nullable().transform(a => {
            if (dayjs(a).isValid()) {
                return new Date(a as string)
            }
            return defaultReturn
        })
    }
    return z.union([z.string().datetime(), z.number(), z.date()]).transform(a => {
        return new Date(a as string)
    })
}
