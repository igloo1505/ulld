import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereInputSchema } from '../TopicWhereInputSchema.js';
export const TopicListRelationFilterSchema: z.ZodType<Prisma.TopicListRelationFilter> = z.object({
  every: z.lazy(() => TopicWhereInputSchema).optional(),
  some: z.lazy(() => TopicWhereInputSchema).optional(),
  none: z.lazy(() => TopicWhereInputSchema).optional()
}).strict();
export default TopicListRelationFilterSchema;