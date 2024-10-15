import { z } from 'zod';
import { ToDoWithRelationsSchema } from './ToDoSchema.js';
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
/////////////////////////////////////////
// TO DO LIST SCHEMA
/////////////////////////////////////////
export const ToDoListSchema = z.object({
    id: z.number().int(),
    label: z.string(),
    createdAt: z.coerce.date(),
    lastUpdate: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// TO DO LIST PARTIAL SCHEMA
/////////////////////////////////////////
export const ToDoListPartialSchema = ToDoListSchema.partial();
export const ToDoListWithRelationsSchema = ToDoListSchema.merge(z.object({
    tasks: z.lazy(() => ToDoWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
}));
export const ToDoListPartialWithRelationsSchema = ToDoListPartialSchema.merge(z.object({
    tasks: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
})).partial();
export const ToDoListWithPartialRelationsSchema = ToDoListSchema.merge(z.object({
    tasks: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
}).partial());
export default ToDoListSchema;
