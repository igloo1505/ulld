import { z } from 'zod';
import { QUANTITY_GUESSSchema } from '../inputTypeSchemas/QUANTITY_GUESSSchema.js';
import { DietaryItemWithRelationsSchema } from './DietaryItemSchema.js';
import { DietaryItemPartialWithRelationsSchema } from './DietaryItemSchema.js';
/////////////////////////////////////////
// SERVING SCHEMA
/////////////////////////////////////////
export const ServingSchema = z.object({
    quant_guess: QUANTITY_GUESSSchema.nullable(),
    id: z.number().int(),
    dietaryItemId: z.number().int(),
    quant_oz: z.number().nullable(),
});
/////////////////////////////////////////
// SERVING PARTIAL SCHEMA
/////////////////////////////////////////
export const ServingPartialSchema = ServingSchema.partial();
export const ServingWithRelationsSchema = ServingSchema.merge(z.object({
    item: z.lazy(() => DietaryItemWithRelationsSchema),
}));
export const ServingPartialWithRelationsSchema = ServingPartialSchema.merge(z.object({
    item: z.lazy(() => DietaryItemPartialWithRelationsSchema),
})).partial();
export const ServingWithPartialRelationsSchema = ServingSchema.merge(z.object({
    item: z.lazy(() => DietaryItemPartialWithRelationsSchema),
}).partial());
export default ServingSchema;
