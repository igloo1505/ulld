import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutSubjectsInputSchema } from './BibEntryCreateWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateWithoutSubjectsInputSchema';
import { BibEntryCreateOrConnectWithoutSubjectsInputSchema } from './BibEntryCreateOrConnectWithoutSubjectsInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema } from './BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.BibEntryUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
