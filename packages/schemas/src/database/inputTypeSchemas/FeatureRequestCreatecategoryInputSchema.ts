import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const FeatureRequestCreatecategoryInputSchema: z.ZodType<Prisma.FeatureRequestCreatecategoryInput> = z.object({
  set: z.string().array()
}).strict();
export default FeatureRequestCreatecategoryInputSchema;