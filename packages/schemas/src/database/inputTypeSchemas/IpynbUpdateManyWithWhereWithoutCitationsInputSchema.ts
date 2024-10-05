import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutCitationsInputSchema } from './IpynbUncheckedUpdateManyWithoutCitationsInputSchema';

export const IpynbUpdateManyWithWhereWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutCitationsInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutCitationsInputSchema;
