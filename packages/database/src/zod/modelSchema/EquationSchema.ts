import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { RelatedValuesWithRelations } from './RelatedValuesSchema'
import type { RelatedValuesPartialWithRelations } from './RelatedValuesSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import { RelatedValuesWithRelationsSchema } from './RelatedValuesSchema'
import { RelatedValuesPartialWithRelationsSchema } from './RelatedValuesSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'

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
