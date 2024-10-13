import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutReadingListInputSchema } from '../BibEntryUpdateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedUpdateWithoutReadingListInputSchema } from '../BibEntryUncheckedUpdateWithoutReadingListInputSchema.js';
import { BibEntryCreateWithoutReadingListInputSchema } from '../BibEntryCreateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from '../BibEntryUncheckedCreateWithoutReadingListInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutReadingListInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema;