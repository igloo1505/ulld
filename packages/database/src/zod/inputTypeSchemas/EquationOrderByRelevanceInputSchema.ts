import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationOrderByRelevanceFieldEnumSchema } from './EquationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const EquationOrderByRelevanceInputSchema: z.ZodType<Prisma.EquationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => EquationOrderByRelevanceFieldEnumSchema),z.lazy(() => EquationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default EquationOrderByRelevanceInputSchema;
