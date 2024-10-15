import { z } from 'zod';
import { ToDoOrderByRelevanceFieldEnumSchema } from './ToDoOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ToDoOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema), z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default ToDoOrderByRelevanceInputSchema;
