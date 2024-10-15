import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const KanbanScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();
export default KanbanScalarWhereWithAggregatesInputSchema;
