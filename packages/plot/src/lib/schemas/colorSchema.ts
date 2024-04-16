import {z} from 'zod'

export const colorScaleArray = z.tuple([z.number().min(0).max(1), z.string()]).array();

export const colorScaleSchema = z.union([
    colorScaleArray,
    z.literal("Blackbody"),
    z.literal("Bluered"),
    z.literal("Blues"),
    z.literal("Cividis"),
    z.literal("Earth"),
    z.literal("Electric"),
    z.literal("Greens"),
    z.literal("Greys"),
    z.literal("Hot"),
    z.literal("Jet"),
    z.literal("Picnic"),
    z.literal("Portland"),
    z.literal("Rainbow"),
    z.literal("RdBu"),
    z.literal("Reds"),
    z.literal("Viridis"),
    z.literal("YlGnBu"),
    z.literal("YlOrRd"),
]);
