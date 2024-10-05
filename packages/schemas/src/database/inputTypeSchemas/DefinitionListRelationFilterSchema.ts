import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionWhereInputSchema } from './DefinitionWhereInputSchema';

export const DefinitionListRelationFilterSchema: z.ZodType<Prisma.DefinitionListRelationFilter> = z.object({
  every: z.lazy(() => DefinitionWhereInputSchema).optional(),
  some: z.lazy(() => DefinitionWhereInputSchema).optional(),
  none: z.lazy(() => DefinitionWhereInputSchema).optional()
}).strict();

export default DefinitionListRelationFilterSchema;
