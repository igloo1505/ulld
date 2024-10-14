import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairCountOutputTypeSelectSchema } from './QAPairCountOutputTypeSelectSchema';

export const QAPairCountOutputTypeArgsSchema: z.ZodType<Prisma.QAPairCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => QAPairCountOutputTypeSelectSchema).nullish(),
}).strict();

export default QAPairCountOutputTypeSelectSchema;
