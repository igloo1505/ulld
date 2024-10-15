import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TopicCountOutputTypeSelectSchema } from './TopicCountOutputTypeSelectSchema.js';
export const TopicCountOutputTypeArgsSchema: z.ZodType<Prisma.TopicCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TopicCountOutputTypeSelectSchema).nullish(),
}).strict();
export default TopicCountOutputTypeSelectSchema;