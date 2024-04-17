import {z} from 'zod'


export const exponentFormatSchema = z.union([
    z.literal("none"),
    z.literal("e"),
    z.literal("E"),
    z.literal("power"),
    z.literal("SI"),
    z.literal("B"),
]);



export const autoMarginSchema = z.union([
    z.literal("height"),
    z.literal("width"),
    z.literal("left"),
    z.literal("right"),
    z.literal("top"),
    z.literal("bottom"),
]);

export const autoRangeSchema = z.union([
    z.boolean(),
    z.literal("reversed"),
    // z.literal("min reversed"),
    // z.literal("max reversed"),
    // z.literal("min"),
    // z.literal("max"),
]);
