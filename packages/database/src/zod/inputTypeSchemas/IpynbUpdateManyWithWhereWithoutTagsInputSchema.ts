import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema';
import { IpynbUncheckedUpdateManyWithoutTagsInputSchema } from './IpynbUncheckedUpdateManyWithoutTagsInputSchema';

export const IpynbUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default IpynbUpdateManyWithWhereWithoutTagsInputSchema;
