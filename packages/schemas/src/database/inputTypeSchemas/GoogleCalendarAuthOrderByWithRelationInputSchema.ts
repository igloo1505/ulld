import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { GoogleCalendarAuthOrderByRelevanceInputSchema } from '../GoogleCalendarAuthOrderByRelevanceInputSchema.js';
export const GoogleCalendarAuthOrderByWithRelationInputSchema: z.ZodType<Prisma.GoogleCalendarAuthOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _relevance: z.lazy(() => GoogleCalendarAuthOrderByRelevanceInputSchema).optional()
}).strict();
export default GoogleCalendarAuthOrderByWithRelationInputSchema;