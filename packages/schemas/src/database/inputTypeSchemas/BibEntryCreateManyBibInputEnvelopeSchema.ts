import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateManyBibInputSchema } from './BibEntryCreateManyBibInputSchema';

export const BibEntryCreateManyBibInputEnvelopeSchema: z.ZodType<Prisma.BibEntryCreateManyBibInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BibEntryCreateManyBibInputSchema),z.lazy(() => BibEntryCreateManyBibInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BibEntryCreateManyBibInputEnvelopeSchema;
