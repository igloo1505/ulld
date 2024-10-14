import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';

export const AutoSettingCreateManyInputSchema: z.ZodType<Prisma.AutoSettingCreateManyInput> = z.object({
  id: z.number().int().optional(),
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();

export default AutoSettingCreateManyInputSchema;
