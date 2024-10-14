import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectOrderByRelevanceFieldEnumSchema } from './SubjectOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SubjectOrderByRelevanceInputSchema: z.ZodType<Prisma.SubjectOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema),z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SubjectOrderByRelevanceInputSchema;
