import { z } from 'zod';
import { DietWithRelationsSchema } from './DietSchema.js';
import { DietPartialWithRelationsSchema } from './DietSchema.js';
import { ServingWithRelationsSchema } from './ServingSchema.js';
import { ServingPartialWithRelationsSchema } from './ServingSchema.js';
/////////////////////////////////////////
// DIETARY ITEM SCHEMA
/////////////////////////////////////////
export const DietaryItemSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    barcode: z.string().nullable(),
    gi: z.number().int().nullable(),
    calsPerOz: z.number().nullable(),
    glutenFree: z.boolean(),
    minimalFructose: z.boolean(),
    natural: z.boolean(),
    organic: z.boolean(),
    impactScore: z.number(),
});
/////////////////////////////////////////
// DIETARY ITEM PARTIAL SCHEMA
/////////////////////////////////////////
export const DietaryItemPartialSchema = DietaryItemSchema.partial();
export const DietaryItemWithRelationsSchema = DietaryItemSchema.merge(z.object({
    Diet: z.lazy(() => DietWithRelationsSchema).array(),
    Serving: z.lazy(() => ServingWithRelationsSchema).array(),
}));
export const DietaryItemPartialWithRelationsSchema = DietaryItemPartialSchema.merge(z.object({
    Diet: z.lazy(() => DietPartialWithRelationsSchema).array(),
    Serving: z.lazy(() => ServingPartialWithRelationsSchema).array(),
})).partial();
export const DietaryItemWithPartialRelationsSchema = DietaryItemSchema.merge(z.object({
    Diet: z.lazy(() => DietPartialWithRelationsSchema).array(),
    Serving: z.lazy(() => ServingPartialWithRelationsSchema).array(),
}).partial());
export default DietaryItemSchema;
