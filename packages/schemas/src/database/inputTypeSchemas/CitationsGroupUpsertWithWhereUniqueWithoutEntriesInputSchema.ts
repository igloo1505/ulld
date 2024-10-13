import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from '../CitationsGroupWhereUniqueInputSchema.js';
import { CitationsGroupUpdateWithoutEntriesInputSchema } from '../CitationsGroupUpdateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedUpdateWithoutEntriesInputSchema } from '../CitationsGroupUncheckedUpdateWithoutEntriesInputSchema.js';
import { CitationsGroupCreateWithoutEntriesInputSchema } from '../CitationsGroupCreateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from '../CitationsGroupUncheckedCreateWithoutEntriesInputSchema.js';
export const CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();
export default CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema;