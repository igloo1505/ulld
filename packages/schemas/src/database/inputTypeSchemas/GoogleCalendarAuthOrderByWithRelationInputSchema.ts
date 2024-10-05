import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { GoogleCalendarAuthOrderByRelevanceInputSchema } from './GoogleCalendarAuthOrderByRelevanceInputSchema';

export const GoogleCalendarAuthOrderByWithRelationInputSchema: z.ZodType<Prisma.GoogleCalendarAuthOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _relevance: z.lazy(() => GoogleCalendarAuthOrderByRelevanceInputSchema).optional()
}).strict();

export default GoogleCalendarAuthOrderByWithRelationInputSchema;
