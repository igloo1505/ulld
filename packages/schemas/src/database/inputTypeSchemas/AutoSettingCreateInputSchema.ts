import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';

export const AutoSettingCreateInputSchema: z.ZodType<Prisma.AutoSettingCreateInput> = z.object({
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();

export default AutoSettingCreateInputSchema;
