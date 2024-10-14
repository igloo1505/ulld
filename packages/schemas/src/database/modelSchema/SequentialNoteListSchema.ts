import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js'
import type { IpynbWithRelations } from './IpynbSchema.js'
import type { IpynbPartialWithRelations } from './IpynbSchema.js'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js'
import { IpynbWithRelationsSchema } from './IpynbSchema.js'
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js'
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST SCHEMA
/////////////////////////////////////////
export const SequentialNoteListSchema = z.object({
  sequentialKey: z.string(),
})
export type SequentialNoteList = z.infer<typeof SequentialNoteListSchema>
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const SequentialNoteListPartialSchema = SequentialNoteListSchema.partial()
export type SequentialNoteListPartial = z.infer<typeof SequentialNoteListPartialSchema>
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST RELATION SCHEMA
/////////////////////////////////////////
export type SequentialNoteListRelations = {
  MdxNote: MdxNoteWithRelations[];
  Ipynb: IpynbWithRelations[];
};
export type SequentialNoteListWithRelations = z.infer<typeof SequentialNoteListSchema> & SequentialNoteListRelations
export const SequentialNoteListWithRelationsSchema: z.ZodType<SequentialNoteListWithRelations> = SequentialNoteListSchema.merge(z.object({
  MdxNote: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  Ipynb: z.lazy(() => IpynbWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// SEQUENTIAL NOTE LIST PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type SequentialNoteListPartialRelations = {
  MdxNote?: MdxNotePartialWithRelations[];
  Ipynb?: IpynbPartialWithRelations[];
};
export type SequentialNoteListPartialWithRelations = z.infer<typeof SequentialNoteListPartialSchema> & SequentialNoteListPartialRelations
export const SequentialNoteListPartialWithRelationsSchema: z.ZodType<SequentialNoteListPartialWithRelations> = SequentialNoteListPartialSchema.merge(z.object({
  MdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
})).partial()
export type SequentialNoteListWithPartialRelations = z.infer<typeof SequentialNoteListSchema> & SequentialNoteListPartialRelations
export const SequentialNoteListWithPartialRelationsSchema: z.ZodType<SequentialNoteListWithPartialRelations> = SequentialNoteListSchema.merge(z.object({
  MdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
}).partial())
export default SequentialNoteListSchema;