import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema.js';
export const DietCreategoalsInputSchema: z.ZodType<Prisma.DietCreategoalsInput> = z.object({
  set: z.lazy(() => DIETARY_GOALSchema).array()
}).strict();
export default DietCreategoalsInputSchema;