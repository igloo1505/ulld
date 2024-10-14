import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema';
import { CitationsGroupUpdateWithoutEntriesInputSchema } from './CitationsGroupUpdateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedUpdateWithoutEntriesInputSchema } from './CitationsGroupUncheckedUpdateWithoutEntriesInputSchema';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema';

export const CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();

export default CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema;
