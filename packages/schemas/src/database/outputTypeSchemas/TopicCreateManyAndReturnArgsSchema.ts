import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicCreateManyInputSchema } from '../inputTypeSchemas/TopicCreateManyInputSchema'

export const TopicCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TopicCreateManyAndReturnArgs> = z.object({
  data: z.union([ TopicCreateManyInputSchema,TopicCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TopicCreateManyAndReturnArgsSchema;
