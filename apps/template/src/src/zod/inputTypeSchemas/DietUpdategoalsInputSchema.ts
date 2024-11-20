import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';

export const DietUpdategoalsInputSchema: z.ZodType<Prisma.DietUpdategoalsInput> = z.object({
  set: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  push: z.union([ z.lazy(() => DIETARY_GOALSchema),z.lazy(() => DIETARY_GOALSchema).array() ]).optional(),
}).strict();

export default DietUpdategoalsInputSchema;
