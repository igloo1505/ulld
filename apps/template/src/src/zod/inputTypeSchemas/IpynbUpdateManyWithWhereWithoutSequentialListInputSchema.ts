import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutSequentialListInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListInputSchema';

export const IpynbUpdateManyWithWhereWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutSequentialListInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutSequentialListInputSchema;
