import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutTopicsInputSchema } from '../BibEntryUpdateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutTopicsInputSchema } from '../BibEntryUncheckedUpdateWithoutTopicsInputSchema.js';
import { BibEntryCreateWithoutTopicsInputSchema } from '../BibEntryCreateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from '../BibEntryUncheckedCreateWithoutTopicsInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema;