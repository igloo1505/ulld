import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutTopicsInputSchema } from './IpynbUncheckedUpdateManyWithoutTopicsInputSchema';

export const IpynbUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutTopicsInputSchema;
