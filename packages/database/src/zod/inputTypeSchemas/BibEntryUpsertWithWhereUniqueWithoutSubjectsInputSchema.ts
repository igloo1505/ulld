import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutSubjectsInputSchema } from './BibEntryUpdateWithoutSubjectsInputSchema';
import { BibEntryUncheckedUpdateWithoutSubjectsInputSchema } from './BibEntryUncheckedUpdateWithoutSubjectsInputSchema';
import { BibEntryCreateWithoutSubjectsInputSchema } from './BibEntryCreateWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateWithoutSubjectsInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema;
