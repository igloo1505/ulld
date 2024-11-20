import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DJTUncheckedCreateInputSchema: z.ZodType<Prisma.DJTUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  pluginName: z.string().optional().nullable(),
  modelId: z.string().optional().nullable(),
  utilityStringField: z.string().optional().nullable(),
  utilityNumberField: z.number().optional().nullable(),
  utilityDateField: z.coerce.date().optional().nullable(),
  utilityDateFieldTwo: z.coerce.date().optional().nullable(),
  data: z.instanceof(Buffer)
}).strict();

export default DJTUncheckedCreateInputSchema;
