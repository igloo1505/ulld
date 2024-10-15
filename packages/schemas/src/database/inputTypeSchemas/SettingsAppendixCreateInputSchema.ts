import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SettingsAppendixCreateInputSchema: z.ZodType<Prisma.SettingsAppendixCreateInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export default SettingsAppendixCreateInputSchema;