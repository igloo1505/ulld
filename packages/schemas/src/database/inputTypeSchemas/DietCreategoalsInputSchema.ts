import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';

export const DietCreategoalsInputSchema: z.ZodType<Prisma.DietCreategoalsInput> = z.object({
  set: z.lazy(() => DIETARY_GOALSchema).array()
}).strict();

export default DietCreategoalsInputSchema;
