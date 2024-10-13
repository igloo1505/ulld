import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TopicSelectSchema.js
..//inputTypeSchemas/TopicIncludeSchema.js
export const TopicArgsSchema: z.ZodType<Prisma.TopicDefaultArgs> = z.object({
  select: z.lazy(() => TopicSelectSchema).optional(),
  include: z.lazy(() => TopicIncludeSchema).optional(),
}).strict();
export default TopicArgsSchema;