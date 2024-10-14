import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutTopicsInputSchema } from './IpynbUpdateWithoutTopicsInputSchema.js';
import { IpynbUncheckedUpdateWithoutTopicsInputSchema } from './IpynbUncheckedUpdateWithoutTopicsInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema;