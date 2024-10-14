import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereInputSchema } from './QAPairWhereInputSchema.js';
export const QAPairListRelationFilterSchema: z.ZodType<Prisma.QAPairListRelationFilter> = z.object({
  every: z.lazy(() => QAPairWhereInputSchema).optional(),
  some: z.lazy(() => QAPairWhereInputSchema).optional(),
  none: z.lazy(() => QAPairWhereInputSchema).optional()
}).strict();
export default QAPairListRelationFilterSchema;