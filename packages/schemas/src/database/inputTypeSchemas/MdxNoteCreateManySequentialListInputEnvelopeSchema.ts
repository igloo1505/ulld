import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateManySequentialListInputSchema } from '../MdxNoteCreateManySequentialListInputSchema.js';
export const MdxNoteCreateManySequentialListInputEnvelopeSchema: z.ZodType<Prisma.MdxNoteCreateManySequentialListInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MdxNoteCreateManySequentialListInputSchema),z.lazy(() => MdxNoteCreateManySequentialListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default MdxNoteCreateManySequentialListInputEnvelopeSchema;