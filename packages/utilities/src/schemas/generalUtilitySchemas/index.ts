import { z } from "zod"
import { makeArrayTransform } from "../transforms"

export const getZodArrayUnionSchema = <T extends z.ZodType>(base: T, optional: boolean = false) => {
    return optional ? z.union([
        base,
        base.array(),
        z.undefined(),
        z.null()
    ]).transform(makeArrayTransform) : z.union([
        base,
        base.array()
    ]).transform(makeArrayTransform)
}

