import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'

/////////////////////////////////////////
// DEFINITION SCHEMA
/////////////////////////////////////////

export const DefinitionSchema = z.object({
  id: z.string(),
  label: z.string().nullable(),
  content: z.string().nullable(),
  alphabeticalLabel: z.string().nullable(),
  mdxNoteId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  lastAccess: z.coerce.date(),
})

export type Definition = z.infer<typeof DefinitionSchema>

/////////////////////////////////////////
// DEFINITION PARTIAL SCHEMA
/////////////////////////////////////////

export const DefinitionPartialSchema = DefinitionSchema.partial()

export type DefinitionPartial = z.infer<typeof DefinitionPartialSchema>

/////////////////////////////////////////
// DEFINITION RELATION SCHEMA
/////////////////////////////////////////

export type DefinitionRelations = {
  mdxNote?: MdxNoteWithRelations | null;
};

export type DefinitionWithRelations = z.infer<typeof DefinitionSchema> & DefinitionRelations

export const DefinitionWithRelationsSchema: z.ZodType<DefinitionWithRelations> = DefinitionSchema.merge(z.object({
  mdxNote: z.lazy(() => MdxNoteWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// DEFINITION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DefinitionPartialRelations = {
  mdxNote?: MdxNotePartialWithRelations | null;
};

export type DefinitionPartialWithRelations = z.infer<typeof DefinitionPartialSchema> & DefinitionPartialRelations

export const DefinitionPartialWithRelationsSchema: z.ZodType<DefinitionPartialWithRelations> = DefinitionPartialSchema.merge(z.object({
  mdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).nullable(),
})).partial()

export type DefinitionWithPartialRelations = z.infer<typeof DefinitionSchema> & DefinitionPartialRelations

export const DefinitionWithPartialRelationsSchema: z.ZodType<DefinitionWithPartialRelations> = DefinitionSchema.merge(z.object({
  mdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).nullable(),
}).partial())

export default DefinitionSchema;
