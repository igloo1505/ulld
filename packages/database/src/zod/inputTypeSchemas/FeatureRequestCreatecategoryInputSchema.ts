import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FeatureRequestCreatecategoryInputSchema: z.ZodType<Prisma.FeatureRequestCreatecategoryInput> = z.object({
  set: z.string().array()
}).strict();

export default FeatureRequestCreatecategoryInputSchema;
