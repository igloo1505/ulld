import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereInputSchema } from './EquationWhereInputSchema.js';
export const EquationListRelationFilterSchema: z.ZodType<Prisma.EquationListRelationFilter> = z.object({
  every: z.lazy(() => EquationWhereInputSchema).optional(),
  some: z.lazy(() => EquationWhereInputSchema).optional(),
  none: z.lazy(() => EquationWhereInputSchema).optional()
}).strict();
export default EquationListRelationFilterSchema;