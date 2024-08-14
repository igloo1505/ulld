import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'

/////////////////////////////////////////
// CITATIONS GROUP SCHEMA
/////////////////////////////////////////

export const CitationsGroupSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
})

export type CitationsGroup = z.infer<typeof CitationsGroupSchema>

/////////////////////////////////////////
// CITATIONS GROUP PARTIAL SCHEMA
/////////////////////////////////////////

export const CitationsGroupPartialSchema = CitationsGroupSchema.partial()

export type CitationsGroupPartial = z.infer<typeof CitationsGroupPartialSchema>

/////////////////////////////////////////
// CITATIONS GROUP RELATION SCHEMA
/////////////////////////////////////////

export type CitationsGroupRelations = {
  entries: BibEntryWithRelations[];
};

export type CitationsGroupWithRelations = z.infer<typeof CitationsGroupSchema> & CitationsGroupRelations

export const CitationsGroupWithRelationsSchema: z.ZodType<CitationsGroupWithRelations> = CitationsGroupSchema.merge(z.object({
  entries: z.lazy(() => BibEntryWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CITATIONS GROUP PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CitationsGroupPartialRelations = {
  entries?: BibEntryPartialWithRelations[];
};

export type CitationsGroupPartialWithRelations = z.infer<typeof CitationsGroupPartialSchema> & CitationsGroupPartialRelations

export const CitationsGroupPartialWithRelationsSchema: z.ZodType<CitationsGroupPartialWithRelations> = CitationsGroupPartialSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
})).partial()

export type CitationsGroupWithPartialRelations = z.infer<typeof CitationsGroupSchema> & CitationsGroupPartialRelations

export const CitationsGroupWithPartialRelationsSchema: z.ZodType<CitationsGroupWithPartialRelations> = CitationsGroupSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
}).partial())

export default CitationsGroupSchema;
