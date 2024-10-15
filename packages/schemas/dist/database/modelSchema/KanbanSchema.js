import { z } from 'zod';
import { KanBanListWithRelationsSchema } from './KanBanListSchema.js';
import { KanBanListPartialWithRelationsSchema } from './KanBanListSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
/////////////////////////////////////////
// KANBAN SCHEMA
/////////////////////////////////////////
export const KanbanSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    createdAt: z.coerce.date(),
    lastUpdate: z.coerce.date(),
});
/////////////////////////////////////////
// KANBAN PARTIAL SCHEMA
/////////////////////////////////////////
export const KanbanPartialSchema = KanbanSchema.partial();
export const KanbanWithRelationsSchema = KanbanSchema.merge(z.object({
    lists: z.lazy(() => KanBanListWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
}));
export const KanbanPartialWithRelationsSchema = KanbanPartialSchema.merge(z.object({
    lists: z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
})).partial();
export const KanbanWithPartialRelationsSchema = KanbanSchema.merge(z.object({
    lists: z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
}).partial());
export default KanbanSchema;
