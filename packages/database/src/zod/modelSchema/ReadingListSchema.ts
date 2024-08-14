import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import type { IpynbWithRelations } from './IpynbSchema'
import type { IpynbPartialWithRelations } from './IpynbSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'
import { IpynbWithRelationsSchema } from './IpynbSchema'
import { IpynbPartialWithRelationsSchema } from './IpynbSchema'

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
