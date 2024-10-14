import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutTopicsInputSchema } from './IpynbUpdateWithoutTopicsInputSchema';
import { IpynbUncheckedUpdateWithoutTopicsInputSchema } from './IpynbUncheckedUpdateWithoutTopicsInputSchema';

export const IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema;
