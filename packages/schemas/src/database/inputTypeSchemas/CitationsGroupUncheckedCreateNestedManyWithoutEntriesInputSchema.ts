import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema.js';
import { CitationsGroupCreateOrConnectWithoutEntriesInputSchema } from './CitationsGroupCreateOrConnectWithoutEntriesInputSchema.js';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema.js';
export const CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedCreateNestedManyWithoutEntriesInput> = z.object({
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema;