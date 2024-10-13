import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from '../BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from '../BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutReadingListInputSchema } from '../BibEntryUncheckedUpdateManyWithoutReadingListInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutReadingListInputSchema;