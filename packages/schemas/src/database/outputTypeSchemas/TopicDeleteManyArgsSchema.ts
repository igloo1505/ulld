import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema.js'
export const TopicDeleteManyArgsSchema: z.ZodType<Prisma.TopicDeleteManyArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
}).strict() ;
export default TopicDeleteManyArgsSchema;