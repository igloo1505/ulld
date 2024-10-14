import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { GoogleCalendarAuthOrderByRelevanceFieldEnumSchema } from './GoogleCalendarAuthOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const GoogleCalendarAuthOrderByRelevanceInputSchema: z.ZodType<Prisma.GoogleCalendarAuthOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema),z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default GoogleCalendarAuthOrderByRelevanceInputSchema;