import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionWhereInputSchema } from '../DefinitionWhereInputSchema.js';
export const DefinitionListRelationFilterSchema: z.ZodType<Prisma.DefinitionListRelationFilter> = z.object({
  every: z.lazy(() => DefinitionWhereInputSchema).optional(),
  some: z.lazy(() => DefinitionWhereInputSchema).optional(),
  none: z.lazy(() => DefinitionWhereInputSchema).optional()
}).strict();
export default DefinitionListRelationFilterSchema;