import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutCitationsInputSchema } from './IpynbUpdateWithoutCitationsInputSchema.js';
import { IpynbUncheckedUpdateWithoutCitationsInputSchema } from './IpynbUncheckedUpdateWithoutCitationsInputSchema.js';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema.js';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutCitationsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema) ]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema;