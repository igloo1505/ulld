import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutTagsInputSchema } from './BibEntryUpdateWithoutTagsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutTagsInputSchema } from './BibEntryUncheckedUpdateWithoutTagsInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema;