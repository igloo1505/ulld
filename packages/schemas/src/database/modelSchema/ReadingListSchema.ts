import { z } from 'zod';
import type { BibEntryWithRelations } from '../BibEntrySchema.js'
import type { BibEntryPartialWithRelations } from '../BibEntrySchema.js'
import type { MdxNoteWithRelations } from '../MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from '../MdxNoteSchema.js'
import type { IpynbWithRelations } from '../IpynbSchema.js'
import type { IpynbPartialWithRelations } from '../IpynbSchema.js'
import { BibEntryWithRelationsSchema } from '../BibEntrySchema.js'
import { BibEntryPartialWithRelationsSchema } from '../BibEntrySchema.js'
import { MdxNoteWithRelationsSchema } from '../MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from '../MdxNoteSchema.js'
import { IpynbWithRelationsSchema } from '../IpynbSchema.js'
import { IpynbPartialWithRelationsSchema } from '../IpynbSchema.js'
/////////////////////////////////////////
// READING LIST SCHEMA
/////////////////////////////////////////
export const ReadingListSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  lastUpdate: z.coerce.date(),
})
export type ReadingList = z.infer<typeof ReadingListSchema>
/////////////////////////////////////////
// READING LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const ReadingListPartialSchema = ReadingListSchema.partial()
export type ReadingListPartial = z.infer<typeof ReadingListPartialSchema>
/////////////////////////////////////////
// READING LIST RELATION SCHEMA
/////////////////////////////////////////
export type ReadingListRelations = {
  bibEntries: BibEntryWithRelations[];
  mdxNotes: MdxNoteWithRelations[];
  ipynbNotes: IpynbWithRelations[];
};
export type ReadingListWithRelations = z.infer<typeof ReadingListSchema> & ReadingListRelations
export const ReadingListWithRelationsSchema: z.ZodType<ReadingListWithRelations> = ReadingListSchema.merge(z.object({
  bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// READING LIST PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type ReadingListPartialRelations = {
  bibEntries?: BibEntryPartialWithRelations[];
  mdxNotes?: MdxNotePartialWithRelations[];
  ipynbNotes?: IpynbPartialWithRelations[];
};
export type ReadingListPartialWithRelations = z.infer<typeof ReadingListPartialSchema> & ReadingListPartialRelations
export const ReadingListPartialWithRelationsSchema: z.ZodType<ReadingListPartialWithRelations> = ReadingListPartialSchema.merge(z.object({
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
})).partial()
export type ReadingListWithPartialRelations = z.infer<typeof ReadingListSchema> & ReadingListPartialRelations
export const ReadingListWithPartialRelationsSchema: z.ZodType<ReadingListWithPartialRelations> = ReadingListSchema.merge(z.object({
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
}).partial())
export default ReadingListSchema;