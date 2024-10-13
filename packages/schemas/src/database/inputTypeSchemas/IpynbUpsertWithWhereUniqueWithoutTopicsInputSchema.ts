import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutTopicsInputSchema } from '../IpynbUpdateWithoutTopicsInputSchema.js';
import { IpynbUncheckedUpdateWithoutTopicsInputSchema } from '../IpynbUncheckedUpdateWithoutTopicsInputSchema.js';
import { IpynbCreateWithoutTopicsInputSchema } from '../IpynbCreateWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from '../IpynbUncheckedCreateWithoutTopicsInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema;