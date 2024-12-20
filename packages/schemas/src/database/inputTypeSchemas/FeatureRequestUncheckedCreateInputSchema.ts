import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { FeatureRequestCreatecategoryInputSchema } from './FeatureRequestCreatecategoryInputSchema.js';
import { FeatureRequestCreateuserBaseInputSchema } from './FeatureRequestCreateuserBaseInputSchema.js';
export const FeatureRequestUncheckedCreateInputSchema: z.ZodType<Prisma.FeatureRequestUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  message: z.string(),
  category: z.union([ z.lazy(() => FeatureRequestCreatecategoryInputSchema),z.string().array() ]).optional(),
  userBase: z.union([ z.lazy(() => FeatureRequestCreateuserBaseInputSchema),z.string().array() ]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();
export default FeatureRequestUncheckedCreateInputSchema;