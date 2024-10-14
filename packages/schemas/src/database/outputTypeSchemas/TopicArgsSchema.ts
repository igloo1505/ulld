import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicSelectSchema } from '../inputTypeSchemas/TopicSelectSchema';
import { TopicIncludeSchema } from '../inputTypeSchemas/TopicIncludeSchema';

export const TopicArgsSchema: z.ZodType<Prisma.TopicDefaultArgs> = z.object({
  select: z.lazy(() => TopicSelectSchema).optional(),
  include: z.lazy(() => TopicIncludeSchema).optional(),
}).strict();

export default TopicArgsSchema;
