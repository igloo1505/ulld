import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TopicUpdateManyMutationInputSchema.js
..//inputTypeSchemas/TopicUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/TopicWhereInputSchema.js
export const TopicUpdateManyArgsSchema: z.ZodType<Prisma.TopicUpdateManyArgs> = z.object({
  data: z.union([ TopicUpdateManyMutationInputSchema,TopicUncheckedUpdateManyInputSchema ]),
  where: TopicWhereInputSchema.optional(),
}).strict() ;
export default TopicUpdateManyArgsSchema;