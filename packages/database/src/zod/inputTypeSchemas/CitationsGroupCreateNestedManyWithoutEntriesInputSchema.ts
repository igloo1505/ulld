import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema';
import { CitationsGroupCreateOrConnectWithoutEntriesInputSchema } from './CitationsGroupCreateOrConnectWithoutEntriesInputSchema';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema';

export const CitationsGroupCreateNestedManyWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupCreateNestedManyWithoutEntriesInput> = z.object({
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CitationsGroupCreateNestedManyWithoutEntriesInputSchema;
