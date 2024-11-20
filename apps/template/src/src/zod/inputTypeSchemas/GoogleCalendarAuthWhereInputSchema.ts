import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const GoogleCalendarAuthWhereInputSchema: z.ZodType<Prisma.GoogleCalendarAuthWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleCalendarAuthWhereInputSchema),z.lazy(() => GoogleCalendarAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleCalendarAuthWhereInputSchema),z.lazy(() => GoogleCalendarAuthWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  auth: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default GoogleCalendarAuthWhereInputSchema;
