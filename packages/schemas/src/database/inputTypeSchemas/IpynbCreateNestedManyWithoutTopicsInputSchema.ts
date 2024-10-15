import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutTopicsInputSchema } from './IpynbCreateWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from './IpynbUncheckedCreateWithoutTopicsInputSchema.js';
import { IpynbCreateOrConnectWithoutTopicsInputSchema } from './IpynbCreateOrConnectWithoutTopicsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
export const IpynbCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbCreateWithoutTopicsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default IpynbCreateNestedManyWithoutTopicsInputSchema;