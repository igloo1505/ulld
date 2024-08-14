import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FeatureRequestCreateuserBaseInputSchema: z.ZodType<Prisma.FeatureRequestCreateuserBaseInput> = z.object({
  set: z.string().array()
}).strict();

export default FeatureRequestCreateuserBaseInputSchema;
