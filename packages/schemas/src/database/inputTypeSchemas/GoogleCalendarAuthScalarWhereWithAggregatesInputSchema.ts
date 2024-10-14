import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
export const GoogleCalendarAuthScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GoogleCalendarAuthScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  auth: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();
export default GoogleCalendarAuthScalarWhereWithAggregatesInputSchema;