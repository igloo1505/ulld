import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereInputSchema } from './QAPairWhereInputSchema';

export const QAPairListRelationFilterSchema: z.ZodType<Prisma.QAPairListRelationFilter> = z.object({
  every: z.lazy(() => QAPairWhereInputSchema).optional(),
  some: z.lazy(() => QAPairWhereInputSchema).optional(),
  none: z.lazy(() => QAPairWhereInputSchema).optional()
}).strict();

export default QAPairListRelationFilterSchema;
