import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QAPairCountOutputTypeSelectSchema } from './QAPairCountOutputTypeSelectSchema.js';
export const QAPairCountOutputTypeArgsSchema: z.ZodType<Prisma.QAPairCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => QAPairCountOutputTypeSelectSchema).nullish(),
}).strict();
export default QAPairCountOutputTypeSelectSchema;