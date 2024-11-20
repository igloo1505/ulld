import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereInputSchema } from './EquationWhereInputSchema';

export const EquationListRelationFilterSchema: z.ZodType<Prisma.EquationListRelationFilter> = z.object({
  every: z.lazy(() => EquationWhereInputSchema).optional(),
  some: z.lazy(() => EquationWhereInputSchema).optional(),
  none: z.lazy(() => EquationWhereInputSchema).optional()
}).strict();

export default EquationListRelationFilterSchema;
