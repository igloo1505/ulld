import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema.js';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema.js';
export const CitationsGroupCreateOrConnectWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupCreateOrConnectWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();
export default CitationsGroupCreateOrConnectWithoutEntriesInputSchema;