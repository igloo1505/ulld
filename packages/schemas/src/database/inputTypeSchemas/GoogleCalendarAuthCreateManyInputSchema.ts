import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const GoogleCalendarAuthCreateManyInputSchema: z.ZodType<Prisma.GoogleCalendarAuthCreateManyInput> = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();
export default GoogleCalendarAuthCreateManyInputSchema;