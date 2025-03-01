import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { GoogleCalendarAuthWhereInputSchema } from './GoogleCalendarAuthWhereInputSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
export const GoogleCalendarAuthWhereUniqueInputSchema: z.ZodType<Prisma.GoogleCalendarAuthWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => GoogleCalendarAuthWhereInputSchema),z.lazy(() => GoogleCalendarAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleCalendarAuthWhereInputSchema),z.lazy(() => GoogleCalendarAuthWhereInputSchema).array() ]).optional(),
  auth: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());
export default GoogleCalendarAuthWhereUniqueInputSchema;