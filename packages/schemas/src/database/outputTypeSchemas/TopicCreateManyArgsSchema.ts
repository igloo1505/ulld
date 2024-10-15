import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TopicCreateManyInputSchema } from '../inputTypeSchemas/TopicCreateManyInputSchema.js'
export const TopicCreateManyArgsSchema: z.ZodType<Prisma.TopicCreateManyArgs> = z.object({
  data: z.union([ TopicCreateManyInputSchema,TopicCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default TopicCreateManyArgsSchema;