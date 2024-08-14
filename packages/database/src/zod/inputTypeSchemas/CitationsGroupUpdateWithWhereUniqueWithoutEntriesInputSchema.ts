import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema';
import { CitationsGroupUpdateWithoutEntriesInputSchema } from './CitationsGroupUpdateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedUpdateWithoutEntriesInputSchema } from './CitationsGroupUncheckedUpdateWithoutEntriesInputSchema';

export const CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema) ]),
}).strict();

export default CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema;
