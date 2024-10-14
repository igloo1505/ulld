import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicUpdateManyMutationInputSchema } from '../inputTypeSchemas/TopicUpdateManyMutationInputSchema'
import { TopicUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TopicUncheckedUpdateManyInputSchema'
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'

export const TopicUpdateManyArgsSchema: z.ZodType<Prisma.TopicUpdateManyArgs> = z.object({
  data: z.union([ TopicUpdateManyMutationInputSchema,TopicUncheckedUpdateManyInputSchema ]),
  where: TopicWhereInputSchema.optional(),
}).strict() ;

export default TopicUpdateManyArgsSchema;
