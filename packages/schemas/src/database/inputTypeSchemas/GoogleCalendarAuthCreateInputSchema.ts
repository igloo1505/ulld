import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const GoogleCalendarAuthCreateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthCreateInput> = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();
export default GoogleCalendarAuthCreateInputSchema;