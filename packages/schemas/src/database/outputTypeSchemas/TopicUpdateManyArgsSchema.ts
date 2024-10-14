import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TopicUpdateManyMutationInputSchema } from '../inputTypeSchemas/TopicUpdateManyMutationInputSchema.js'
import { TopicUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TopicUncheckedUpdateManyInputSchema.js'
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema.js'
export const TopicUpdateManyArgsSchema: z.ZodType<Prisma.TopicUpdateManyArgs> = z.object({
  data: z.union([ TopicUpdateManyMutationInputSchema,TopicUncheckedUpdateManyInputSchema ]),
  where: TopicWhereInputSchema.optional(),
}).strict() ;
export default TopicUpdateManyArgsSchema;