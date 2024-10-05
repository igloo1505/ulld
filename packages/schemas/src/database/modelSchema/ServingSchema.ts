import { z } from 'zod';
import { QUANTITY_GUESSSchema } from '../inputTypeSchemas/QUANTITY_GUESSSchema'
import type { DietaryItemWithRelations } from './DietaryItemSchema'
import type { DietaryItemPartialWithRelations } from './DietaryItemSchema'
import { DietaryItemWithRelationsSchema } from './DietaryItemSchema'
import { DietaryItemPartialWithRelationsSchema } from './DietaryItemSchema'

/////////////////////////////////////////
// SERVING SCHEMA
/////////////////////////////////////////

export const ServingSchema = z.object({
  quant_guess: QUANTITY_GUESSSchema.nullable(),
  id: z.number().int(),
  dietaryItemId: z.number().int(),
  quant_oz: z.number().nullable(),
})

export type Serving = z.infer<typeof ServingSchema>

/////////////////////////////////////////
// SERVING PARTIAL SCHEMA
/////////////////////////////////////////

export const ServingPartialSchema = ServingSchema.partial()

export type ServingPartial = z.infer<typeof ServingPartialSchema>

/////////////////////////////////////////
// SERVING RELATION SCHEMA
/////////////////////////////////////////

export type ServingRelations = {
  item: DietaryItemWithRelations;
};

export type ServingWithRelations = z.infer<typeof ServingSchema> & ServingRelations

export const ServingWithRelationsSchema: z.ZodType<ServingWithRelations> = ServingSchema.merge(z.object({
  item: z.lazy(() => DietaryItemWithRelationsSchema),
}))

/////////////////////////////////////////
// SERVING PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ServingPartialRelations = {
  item?: DietaryItemPartialWithRelations;
};

export type ServingPartialWithRelations = z.infer<typeof ServingPartialSchema> & ServingPartialRelations

export const ServingPartialWithRelationsSchema: z.ZodType<ServingPartialWithRelations> = ServingPartialSchema.merge(z.object({
  item: z.lazy(() => DietaryItemPartialWithRelationsSchema),
})).partial()

export type ServingWithPartialRelations = z.infer<typeof ServingSchema> & ServingPartialRelations

export const ServingWithPartialRelationsSchema: z.ZodType<ServingWithPartialRelations> = ServingSchema.merge(z.object({
  item: z.lazy(() => DietaryItemPartialWithRelationsSchema),
}).partial())

export default ServingSchema;
