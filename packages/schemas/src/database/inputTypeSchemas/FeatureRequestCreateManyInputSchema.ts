import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeatureRequestCreatecategoryInputSchema } from './FeatureRequestCreatecategoryInputSchema';
import { FeatureRequestCreateuserBaseInputSchema } from './FeatureRequestCreateuserBaseInputSchema';

export const FeatureRequestCreateManyInputSchema: z.ZodType<Prisma.FeatureRequestCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  message: z.string(),
  category: z.union([ z.lazy(() => FeatureRequestCreatecategoryInputSchema),z.string().array() ]).optional(),
  userBase: z.union([ z.lazy(() => FeatureRequestCreateuserBaseInputSchema),z.string().array() ]).optional(),
  receivedOn: z.coerce.date().optional()
}).strict();

export default FeatureRequestCreateManyInputSchema;
