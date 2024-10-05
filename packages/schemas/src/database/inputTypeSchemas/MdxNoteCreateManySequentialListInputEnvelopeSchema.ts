import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateManySequentialListInputSchema } from './MdxNoteCreateManySequentialListInputSchema';

export const MdxNoteCreateManySequentialListInputEnvelopeSchema: z.ZodType<Prisma.MdxNoteCreateManySequentialListInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MdxNoteCreateManySequentialListInputSchema),z.lazy(() => MdxNoteCreateManySequentialListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MdxNoteCreateManySequentialListInputEnvelopeSchema;
