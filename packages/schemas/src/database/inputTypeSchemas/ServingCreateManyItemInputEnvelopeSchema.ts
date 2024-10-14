import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingCreateManyItemInputSchema } from './ServingCreateManyItemInputSchema';

export const ServingCreateManyItemInputEnvelopeSchema: z.ZodType<Prisma.ServingCreateManyItemInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServingCreateManyItemInputSchema),z.lazy(() => ServingCreateManyItemInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ServingCreateManyItemInputEnvelopeSchema;
