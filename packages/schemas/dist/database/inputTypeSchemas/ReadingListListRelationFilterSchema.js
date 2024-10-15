import { z } from 'zod';
import { ReadingListWhereInputSchema } from './ReadingListWhereInputSchema.js';
export const ReadingListListRelationFilterSchema = z.object({
    every: z.lazy(() => ReadingListWhereInputSchema).optional(),
    some: z.lazy(() => ReadingListWhereInputSchema).optional(),
    none: z.lazy(() => ReadingListWhereInputSchema).optional()
}).strict();
export default ReadingListListRelationFilterSchema;
