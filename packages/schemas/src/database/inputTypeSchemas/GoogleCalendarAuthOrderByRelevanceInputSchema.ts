import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleCalendarAuthOrderByRelevanceFieldEnumSchema } from './GoogleCalendarAuthOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const GoogleCalendarAuthOrderByRelevanceInputSchema: z.ZodType<Prisma.GoogleCalendarAuthOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema),z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default GoogleCalendarAuthOrderByRelevanceInputSchema;
