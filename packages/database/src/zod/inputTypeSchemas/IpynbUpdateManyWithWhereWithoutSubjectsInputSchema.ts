import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateManyWithoutSubjectsInputSchema';

export const IpynbUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutSubjectsInputSchema;
