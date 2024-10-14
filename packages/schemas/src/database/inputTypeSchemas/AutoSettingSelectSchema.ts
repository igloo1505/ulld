import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()

export default AutoSettingSelectSchema;
