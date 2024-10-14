import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardCreateManyKanBanListInputSchema } from './KanBanCardCreateManyKanBanListInputSchema.js';
export const KanBanCardCreateManyKanBanListInputEnvelopeSchema: z.ZodType<Prisma.KanBanCardCreateManyKanBanListInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => KanBanCardCreateManyKanBanListInputSchema),z.lazy(() => KanBanCardCreateManyKanBanListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default KanBanCardCreateManyKanBanListInputEnvelopeSchema;