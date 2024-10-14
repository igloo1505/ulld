import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionCreateManyMdxNoteInputSchema } from './DefinitionCreateManyMdxNoteInputSchema.js';
export const DefinitionCreateManyMdxNoteInputEnvelopeSchema: z.ZodType<Prisma.DefinitionCreateManyMdxNoteInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DefinitionCreateManyMdxNoteInputSchema),z.lazy(() => DefinitionCreateManyMdxNoteInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default DefinitionCreateManyMdxNoteInputEnvelopeSchema;