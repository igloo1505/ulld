import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutSubjectsInputSchema } from '../BibEntryUpdateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutSubjectsInputSchema } from '../BibEntryUncheckedUpdateWithoutSubjectsInputSchema.js';
import { BibEntryCreateWithoutSubjectsInputSchema } from '../BibEntryCreateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from '../BibEntryUncheckedCreateWithoutSubjectsInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema;