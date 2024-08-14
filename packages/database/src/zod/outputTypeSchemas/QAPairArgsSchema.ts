import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairSelectSchema } from '../inputTypeSchemas/QAPairSelectSchema';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema';

export const QAPairArgsSchema: z.ZodType<Prisma.QAPairDefaultArgs> = z.object({
  select: z.lazy(() => QAPairSelectSchema).optional(),
  include: z.lazy(() => QAPairIncludeSchema).optional(),
}).strict();

export default QAPairArgsSchema;
