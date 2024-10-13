import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutSubjectsInputSchema } from '../BibEntryCreateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from '../BibEntryUncheckedCreateWithoutSubjectsInputSchema.js';
import { BibEntryCreateOrConnectWithoutSubjectsInputSchema } from '../BibEntryCreateOrConnectWithoutSubjectsInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema } from '../BibEntryUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema } from '../BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema } from '../BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { BibEntryScalarWhereInputSchema } from '../BibEntryScalarWhereInputSchema.js';
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