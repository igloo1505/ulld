import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TopicWhereInputSchema.js
export const TopicDeleteManyArgsSchema: z.ZodType<Prisma.TopicDeleteManyArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
}).strict() ;
export default TopicDeleteManyArgsSchema;