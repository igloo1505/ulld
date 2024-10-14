import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicCountOutputTypeSelectSchema } from './TopicCountOutputTypeSelectSchema';

export const TopicCountOutputTypeArgsSchema: z.ZodType<Prisma.TopicCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TopicCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TopicCountOutputTypeSelectSchema;
