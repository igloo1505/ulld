import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';

export const AutoSettingUncheckedCreateInputSchema: z.ZodType<Prisma.AutoSettingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();

export default AutoSettingUncheckedCreateInputSchema;
