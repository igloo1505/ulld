import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardCreateManyKanBanListInputSchema } from './KanBanCardCreateManyKanBanListInputSchema';

export const KanBanCardCreateManyKanBanListInputEnvelopeSchema: z.ZodType<Prisma.KanBanCardCreateManyKanBanListInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => KanBanCardCreateManyKanBanListInputSchema),z.lazy(() => KanBanCardCreateManyKanBanListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default KanBanCardCreateManyKanBanListInputEnvelopeSchema;
