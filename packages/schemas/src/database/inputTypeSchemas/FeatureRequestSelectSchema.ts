import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const FeatureRequestSelectSchema: z.ZodType<Prisma.FeatureRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
}).strict()
export default FeatureRequestSelectSchema;