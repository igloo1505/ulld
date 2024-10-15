import { z } from 'zod';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
/////////////////////////////////////////
// READING LIST SCHEMA
/////////////////////////////////////////
export const ReadingListSchema = z.object({
    name: z.string(),
    description: z.string().nullable(),
    createdAt: z.coerce.date(),
    lastUpdate: z.coerce.date(),
});
/////////////////////////////////////////
// READING LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const ReadingListPartialSchema = ReadingListSchema.partial();
export const ReadingListWithRelationsSchema = ReadingListSchema.merge(z.object({
    bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
}));
export const ReadingListPartialWithRelationsSchema = ReadingListPartialSchema.merge(z.object({
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
})).partial();
export const ReadingListWithPartialRelationsSchema = ReadingListSchema.merge(z.object({
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
}).partial());
export default ReadingListSchema;
