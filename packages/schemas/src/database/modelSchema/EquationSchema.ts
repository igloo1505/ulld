import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema.js'
import type { RelatedValuesWithRelations } from './RelatedValuesSchema.js'
import type { RelatedValuesPartialWithRelations } from './RelatedValuesSchema.js'
import type { TagWithRelations } from './TagSchema.js'
import type { TagPartialWithRelations } from './TagSchema.js'
import type { TopicWithRelations } from './TopicSchema.js'
import type { TopicPartialWithRelations } from './TopicSchema.js'
import type { SubjectWithRelations } from './SubjectSchema.js'
import type { SubjectPartialWithRelations } from './SubjectSchema.js'
import type { MdxNoteWithRelations } from './MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js'
import { RelatedValuesWithRelationsSchema } from './RelatedValuesSchema.js'
import { RelatedValuesPartialWithRelationsSchema } from './RelatedValuesSchema.js'
import { TagWithRelationsSchema } from './TagSchema.js'
import { TagPartialWithRelationsSchema } from './TagSchema.js'
import { TopicWithRelationsSchema } from './TopicSchema.js'
import { TopicPartialWithRelationsSchema } from './TopicSchema.js'
import { SubjectWithRelationsSchema } from './SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js'
/////////////////////////////////////////
// EQUATION SCHEMA
/////////////////////////////////////////
export const EquationSchema = z.object({
  id: z.number().int(),
  equationId: z.string().nullable(),
  title: z.string(),
  desc: z.string().nullable(),
  content: z.string(),
  asPython: z.string().nullable(),
  variableLegend: JsonValueSchema,
  variables: z.string().array(),
  keywords: z.string().array(),
  createdAt: z.coerce.date(),
  lastAccess: z.coerce.date(),
})
export type Equation = z.infer<typeof EquationSchema>
/////////////////////////////////////////
// EQUATION PARTIAL SCHEMA
/////////////////////////////////////////
export const EquationPartialSchema = EquationSchema.partial()
export type EquationPartial = z.infer<typeof EquationPartialSchema>
/////////////////////////////////////////
// EQUATION RELATION SCHEMA
/////////////////////////////////////////
export type EquationRelations = {
  relatedValues: RelatedValuesWithRelations[];
  tags: TagWithRelations[];
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
  mdxNotes: MdxNoteWithRelations[];
};
export type EquationWithRelations = z.infer<typeof EquationSchema> & EquationRelations
export const EquationWithRelationsSchema: z.ZodType<EquationWithRelations> = EquationSchema.merge(z.object({
  relatedValues: z.lazy(() => RelatedValuesWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// EQUATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type EquationPartialRelations = {
  relatedValues?: RelatedValuesPartialWithRelations[];
  tags?: TagPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  mdxNotes?: MdxNotePartialWithRelations[];
};
export type EquationPartialWithRelations = z.infer<typeof EquationPartialSchema> & EquationPartialRelations
export const EquationPartialWithRelationsSchema: z.ZodType<EquationPartialWithRelations> = EquationPartialSchema.merge(z.object({
  relatedValues: z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
})).partial()
export type EquationWithPartialRelations = z.infer<typeof EquationSchema> & EquationPartialRelations
export const EquationWithPartialRelationsSchema: z.ZodType<EquationWithPartialRelations> = EquationSchema.merge(z.object({
  relatedValues: z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
}).partial())
export default EquationSchema;