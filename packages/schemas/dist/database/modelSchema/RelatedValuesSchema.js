import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema.js';
import { EquationWithRelationsSchema } from './EquationSchema.js';
import { EquationPartialWithRelationsSchema } from './EquationSchema.js';
/////////////////////////////////////////
// RELATED VALUES SCHEMA
/////////////////////////////////////////
export const RelatedValuesSchema = z.object({
    id: z.number().int(),
    input: JsonValueSchema,
    output: z.number(),
    equationId: z.number().int().array(),
});
/////////////////////////////////////////
// RELATED VALUES PARTIAL SCHEMA
/////////////////////////////////////////
export const RelatedValuesPartialSchema = RelatedValuesSchema.partial();
export const RelatedValuesWithRelationsSchema = RelatedValuesSchema.merge(z.object({
    equations: z.lazy(() => EquationWithRelationsSchema).array(),
}));
export const RelatedValuesPartialWithRelationsSchema = RelatedValuesPartialSchema.merge(z.object({
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial();
export const RelatedValuesWithPartialRelationsSchema = RelatedValuesSchema.merge(z.object({
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial());
export default RelatedValuesSchema;
