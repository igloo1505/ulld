import { z } from 'zod';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
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
});
/////////////////////////////////////////
// DEFINITION PARTIAL SCHEMA
/////////////////////////////////////////
export const DefinitionPartialSchema = DefinitionSchema.partial();
export const DefinitionWithRelationsSchema = DefinitionSchema.merge(z.object({
    mdxNote: z.lazy(() => MdxNoteWithRelationsSchema).nullable(),
}));
export const DefinitionPartialWithRelationsSchema = DefinitionPartialSchema.merge(z.object({
    mdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).nullable(),
})).partial();
export const DefinitionWithPartialRelationsSchema = DefinitionSchema.merge(z.object({
    mdxNote: z.lazy(() => MdxNotePartialWithRelationsSchema).nullable(),
}).partial());
export default DefinitionSchema;
