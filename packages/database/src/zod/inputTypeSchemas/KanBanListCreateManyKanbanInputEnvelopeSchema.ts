import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateManyKanbanInputSchema } from './KanBanListCreateManyKanbanInputSchema';

export const KanBanListCreateManyKanbanInputEnvelopeSchema: z.ZodType<Prisma.KanBanListCreateManyKanbanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => KanBanListCreateManyKanbanInputSchema),z.lazy(() => KanBanListCreateManyKanbanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default KanBanListCreateManyKanbanInputEnvelopeSchema;
