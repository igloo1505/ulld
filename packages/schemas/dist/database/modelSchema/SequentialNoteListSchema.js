import { z } from 'zod';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST SCHEMA
/////////////////////////////////////////
export const SequentialNoteListSchema = z.object({
    sequentialKey: z.string(),
});
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const SequentialNoteListPartialSchema = SequentialNoteListSchema.partial();
export const SequentialNoteListWithRelationsSchema = SequentialNoteListSchema.merge(z.object({
    MdxNote: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    Ipynb: z.lazy(() => IpynbWithRelationsSchema).array(),
}));
export const SequentialNoteListPartialWithRelationsSchema = SequentialNoteListPartialSchema.merge(z.object({
    MdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    Ipynb: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
})).partial();
export const SequentialNoteListWithPartialRelationsSchema = SequentialNoteListSchema.merge(z.object({
    MdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    Ipynb: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
}).partial());
export default SequentialNoteListSchema;
