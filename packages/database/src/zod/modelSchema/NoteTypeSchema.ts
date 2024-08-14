import { z } from 'zod';

/////////////////////////////////////////
// NOTE TYPE SCHEMA
/////////////////////////////////////////

export const NoteTypeSchema = z.object({
  name: z.string(),
})

export type NoteType = z.infer<typeof NoteTypeSchema>

/////////////////////////////////////////
// NOTE TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const NoteTypePartialSchema = NoteTypeSchema.partial()

export type NoteTypePartial = z.infer<typeof NoteTypePartialSchema>

export default NoteTypeSchema;
