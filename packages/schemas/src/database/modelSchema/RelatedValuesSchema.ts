import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { EquationWithRelations } from './EquationSchema'
import type { EquationPartialWithRelations } from './EquationSchema'
import { EquationWithRelationsSchema } from './EquationSchema'
import { EquationPartialWithRelationsSchema } from './EquationSchema'

/////////////////////////////////////////
// RELATED VALUES SCHEMA
/////////////////////////////////////////

export const RelatedValuesSchema = z.object({
  id: z.number().int(),
  input: JsonValueSchema,
  output: z.number(),
  equationId: z.number().int().array(),
})

export type RelatedValues = z.infer<typeof RelatedValuesSchema>

/////////////////////////////////////////
// RELATED VALUES PARTIAL SCHEMA
/////////////////////////////////////////

export const RelatedValuesPartialSchema = RelatedValuesSchema.partial()

export type RelatedValuesPartial = z.infer<typeof RelatedValuesPartialSchema>

/////////////////////////////////////////
// RELATED VALUES RELATION SCHEMA
/////////////////////////////////////////

export type RelatedValuesRelations = {
  equations: EquationWithRelations[];
};

export type RelatedValuesWithRelations = z.infer<typeof RelatedValuesSchema> & RelatedValuesRelations

export const RelatedValuesWithRelationsSchema: z.ZodType<RelatedValuesWithRelations> = RelatedValuesSchema.merge(z.object({
  equations: z.lazy(() => EquationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// RELATED VALUES PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RelatedValuesPartialRelations = {
  equations?: EquationPartialWithRelations[];
};

export type RelatedValuesPartialWithRelations = z.infer<typeof RelatedValuesPartialSchema> & RelatedValuesPartialRelations

export const RelatedValuesPartialWithRelationsSchema: z.ZodType<RelatedValuesPartialWithRelations> = RelatedValuesPartialSchema.merge(z.object({
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial()

export type RelatedValuesWithPartialRelations = z.infer<typeof RelatedValuesSchema> & RelatedValuesPartialRelations

export const RelatedValuesWithPartialRelationsSchema: z.ZodType<RelatedValuesWithPartialRelations> = RelatedValuesSchema.merge(z.object({
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial())

export default RelatedValuesSchema;
