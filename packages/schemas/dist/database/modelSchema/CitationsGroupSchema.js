import { z } from 'zod';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
/////////////////////////////////////////
// CITATIONS GROUP SCHEMA
/////////////////////////////////////////
export const CitationsGroupSchema = z.object({
    name: z.string(),
    description: z.string().nullable(),
});
/////////////////////////////////////////
// CITATIONS GROUP PARTIAL SCHEMA
/////////////////////////////////////////
export const CitationsGroupPartialSchema = CitationsGroupSchema.partial();
export const CitationsGroupWithRelationsSchema = CitationsGroupSchema.merge(z.object({
    entries: z.lazy(() => BibEntryWithRelationsSchema).array(),
}));
export const CitationsGroupPartialWithRelationsSchema = CitationsGroupPartialSchema.merge(z.object({
    entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
})).partial();
export const CitationsGroupWithPartialRelationsSchema = CitationsGroupSchema.merge(z.object({
    entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
}).partial());
export default CitationsGroupSchema;
