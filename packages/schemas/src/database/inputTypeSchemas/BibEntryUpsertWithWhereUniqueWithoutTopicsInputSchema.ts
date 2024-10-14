import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutTopicsInputSchema } from './BibEntryUpdateWithoutTopicsInputSchema';
import { BibEntryUncheckedUpdateWithoutTopicsInputSchema } from './BibEntryUncheckedUpdateWithoutTopicsInputSchema';
import { BibEntryCreateWithoutTopicsInputSchema } from './BibEntryCreateWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from './BibEntryUncheckedCreateWithoutTopicsInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema;
