import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema';

export const CitationsGroupCreateOrConnectWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupCreateOrConnectWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();

export default CitationsGroupCreateOrConnectWithoutEntriesInputSchema;
