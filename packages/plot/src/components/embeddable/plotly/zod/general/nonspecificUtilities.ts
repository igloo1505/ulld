import { z } from "zod";

export const numberStringUnionSchema = z.union([z.number(), z.string()])

export const stringOrStringArraySchema = z.union([
    z.string(),
    z.string().array(),
])

export const numberOrNumberArraySchema = z.union([
    z.number(),
    z.number().array(),
])
