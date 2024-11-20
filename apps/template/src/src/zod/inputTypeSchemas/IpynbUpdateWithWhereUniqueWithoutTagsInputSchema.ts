import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutTagsInputSchema } from './IpynbUpdateWithoutTagsInputSchema';
import { IpynbUncheckedUpdateWithoutTagsInputSchema } from './IpynbUncheckedUpdateWithoutTagsInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutTagsInputSchema;
