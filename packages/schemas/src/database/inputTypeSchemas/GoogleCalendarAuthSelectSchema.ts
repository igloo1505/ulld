import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()
export default GoogleCalendarAuthSelectSchema;