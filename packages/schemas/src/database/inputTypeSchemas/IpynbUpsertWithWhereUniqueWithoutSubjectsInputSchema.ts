import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutSubjectsInputSchema } from './IpynbUpdateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedUpdateWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateWithoutSubjectsInputSchema.js';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema;