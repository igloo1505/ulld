import { z } from 'zod';
import type { DietWithRelations } from './DietSchema'
import type { DietPartialWithRelations } from './DietSchema'
import type { ServingWithRelations } from './ServingSchema'
import type { ServingPartialWithRelations } from './ServingSchema'
import { DietWithRelationsSchema } from './DietSchema'
import { DietPartialWithRelationsSchema } from './DietSchema'
import { ServingWithRelationsSchema } from './ServingSchema'
import { ServingPartialWithRelationsSchema } from './ServingSchema'

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
})

export type DietaryItem = z.infer<typeof DietaryItemSchema>

/////////////////////////////////////////
// DIETARY ITEM PARTIAL SCHEMA
/////////////////////////////////////////

export const DietaryItemPartialSchema = DietaryItemSchema.partial()

export type DietaryItemPartial = z.infer<typeof DietaryItemPartialSchema>

/////////////////////////////////////////
// DIETARY ITEM RELATION SCHEMA
/////////////////////////////////////////

export type DietaryItemRelations = {
  Diet: DietWithRelations[];
  Serving: ServingWithRelations[];
};

export type DietaryItemWithRelations = z.infer<typeof DietaryItemSchema> & DietaryItemRelations

export const DietaryItemWithRelationsSchema: z.ZodType<DietaryItemWithRelations> = DietaryItemSchema.merge(z.object({
  Diet: z.lazy(() => DietWithRelationsSchema).array(),
  Serving: z.lazy(() => ServingWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DIETARY ITEM PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DietaryItemPartialRelations = {
  Diet?: DietPartialWithRelations[];
  Serving?: ServingPartialWithRelations[];
};

export type DietaryItemPartialWithRelations = z.infer<typeof DietaryItemPartialSchema> & DietaryItemPartialRelations

export const DietaryItemPartialWithRelationsSchema: z.ZodType<DietaryItemPartialWithRelations> = DietaryItemPartialSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: z.lazy(() => ServingPartialWithRelationsSchema).array(),
})).partial()

export type DietaryItemWithPartialRelations = z.infer<typeof DietaryItemSchema> & DietaryItemPartialRelations

export const DietaryItemWithPartialRelationsSchema: z.ZodType<DietaryItemWithPartialRelations> = DietaryItemSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: z.lazy(() => ServingPartialWithRelationsSchema).array(),
}).partial())

export default DietaryItemSchema;
