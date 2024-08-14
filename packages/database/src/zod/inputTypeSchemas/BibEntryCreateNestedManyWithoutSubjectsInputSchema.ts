import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutSubjectsInputSchema } from './BibEntryCreateWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateWithoutSubjectsInputSchema';
import { BibEntryCreateOrConnectWithoutSubjectsInputSchema } from './BibEntryCreateOrConnectWithoutSubjectsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryCreateNestedManyWithoutSubjectsInputSchema;
