import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'

/////////////////////////////////////////
// BIB SCHEMA
/////////////////////////////////////////

export const BibSchema = z.object({
  id: z.number().int(),
  filename: z.string(),
  firstSync: z.coerce.date(),
  lastSync: z.coerce.date(),
})

export type Bib = z.infer<typeof BibSchema>

/////////////////////////////////////////
// BIB PARTIAL SCHEMA
/////////////////////////////////////////

export const BibPartialSchema = BibSchema.partial()

export type BibPartial = z.infer<typeof BibPartialSchema>

/////////////////////////////////////////
// BIB RELATION SCHEMA
/////////////////////////////////////////

export type BibRelations = {
  entries: BibEntryWithRelations[];
};

export type BibWithRelations = z.infer<typeof BibSchema> & BibRelations

export const BibWithRelationsSchema: z.ZodType<BibWithRelations> = BibSchema.merge(z.object({
  entries: z.lazy(() => BibEntryWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BIB PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BibPartialRelations = {
  entries?: BibEntryPartialWithRelations[];
};

export type BibPartialWithRelations = z.infer<typeof BibPartialSchema> & BibPartialRelations

export const BibPartialWithRelationsSchema: z.ZodType<BibPartialWithRelations> = BibPartialSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
})).partial()

export type BibWithPartialRelations = z.infer<typeof BibSchema> & BibPartialRelations

export const BibWithPartialRelationsSchema: z.ZodType<BibWithPartialRelations> = BibSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
}).partial())

export default BibSchema;
