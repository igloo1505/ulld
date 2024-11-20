import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupScalarWhereInputSchema } from './CitationsGroupScalarWhereInputSchema';
import { CitationsGroupUpdateManyMutationInputSchema } from './CitationsGroupUpdateManyMutationInputSchema';
import { CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema } from './CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema';

export const CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUpdateManyWithWhereWithoutEntriesInput> = z.object({
  where: z.lazy(() => CitationsGroupScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CitationsGroupUpdateManyMutationInputSchema),z.lazy(() => CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema) ]),
}).strict();

export default CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema;
