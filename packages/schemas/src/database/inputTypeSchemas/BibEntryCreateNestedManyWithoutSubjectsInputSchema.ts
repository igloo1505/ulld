import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutSubjectsInputSchema } from '../BibEntryCreateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from '../BibEntryUncheckedCreateWithoutSubjectsInputSchema.js';
import { BibEntryCreateOrConnectWithoutSubjectsInputSchema } from '../BibEntryCreateOrConnectWithoutSubjectsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
export const BibEntryCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryCreateNestedManyWithoutSubjectsInputSchema;