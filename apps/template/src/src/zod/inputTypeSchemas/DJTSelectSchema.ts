import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  pluginName: z.boolean().optional(),
  modelId: z.boolean().optional(),
  utilityStringField: z.boolean().optional(),
  utilityNumberField: z.boolean().optional(),
  utilityDateField: z.boolean().optional(),
  utilityDateFieldTwo: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export default DJTSelectSchema;
