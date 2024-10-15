import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema.js';
import { RelatedValuesWithRelationsSchema } from './RelatedValuesSchema.js';
import { RelatedValuesPartialWithRelationsSchema } from './RelatedValuesSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
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
});
/////////////////////////////////////////
// EQUATION PARTIAL SCHEMA
/////////////////////////////////////////
export const EquationPartialSchema = EquationSchema.partial();
export const EquationWithRelationsSchema = EquationSchema.merge(z.object({
    relatedValues: z.lazy(() => RelatedValuesWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
}));
export const EquationPartialWithRelationsSchema = EquationPartialSchema.merge(z.object({
    relatedValues: z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
})).partial();
export const EquationWithPartialRelationsSchema = EquationSchema.merge(z.object({
    relatedValues: z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    mdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
}).partial());
export default EquationSchema;
