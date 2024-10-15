import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutCitationsInputSchema } from './IpynbUpdateWithoutCitationsInputSchema.js';
import { IpynbUncheckedUpdateWithoutCitationsInputSchema } from './IpynbUncheckedUpdateWithoutCitationsInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutCitationsInputSchema) ]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema;