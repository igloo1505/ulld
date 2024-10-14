import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QAPairSelectSchema } from '../inputTypeSchemas/QAPairSelectSchema.js';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema.js';
export const QAPairArgsSchema: z.ZodType<Prisma.QAPairDefaultArgs> = z.object({
  select: z.lazy(() => QAPairSelectSchema).optional(),
  include: z.lazy(() => QAPairIncludeSchema).optional(),
}).strict();
export default QAPairArgsSchema;