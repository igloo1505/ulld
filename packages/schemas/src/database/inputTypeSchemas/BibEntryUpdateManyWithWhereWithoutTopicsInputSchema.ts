import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutTopicsInputSchema } from './BibEntryUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutTopicsInputSchema;