import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GoogleCalendarAuthUncheckedCreateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();

export default GoogleCalendarAuthUncheckedCreateInputSchema;
