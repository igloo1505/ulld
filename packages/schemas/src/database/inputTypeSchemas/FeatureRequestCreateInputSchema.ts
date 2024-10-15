import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { FeatureRequestCreatecategoryInputSchema } from './FeatureRequestCreatecategoryInputSchema.js';
import { FeatureRequestCreateuserBaseInputSchema } from './FeatureRequestCreateuserBaseInputSchema.js';
export const FeatureRequestCreateInputSchema: z.ZodType<Prisma.FeatureRequestCreateInput> = z.object({
  email: z.string(),
  message: z.string(),
  category: z.union([ z.lazy(() => FeatureRequestCreatecategoryInputSchema),z.string().array() ]).optional(),
  userBase: z.union([ z.lazy(() => FeatureRequestCreateuserBaseInputSchema),z.string().array() ]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();
export default FeatureRequestCreateInputSchema;