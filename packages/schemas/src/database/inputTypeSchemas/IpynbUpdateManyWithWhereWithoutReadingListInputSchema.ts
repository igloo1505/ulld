import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutReadingListInputSchema } from './IpynbUncheckedUpdateManyWithoutReadingListInputSchema';

export const IpynbUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutReadingListInputSchema;
