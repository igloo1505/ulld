import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutTagsInputSchema } from './BibEntryUpdateWithoutTagsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutTagsInputSchema } from './BibEntryUncheckedUpdateWithoutTagsInputSchema.js';
import { BibEntryCreateWithoutTagsInputSchema } from './BibEntryCreateWithoutTagsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from './BibEntryUncheckedCreateWithoutTagsInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema;