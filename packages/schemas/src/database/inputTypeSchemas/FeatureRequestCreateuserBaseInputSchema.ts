import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const FeatureRequestCreateuserBaseInputSchema: z.ZodType<Prisma.FeatureRequestCreateuserBaseInput> = z.object({
  set: z.string().array()
}).strict();
export default FeatureRequestCreateuserBaseInputSchema;