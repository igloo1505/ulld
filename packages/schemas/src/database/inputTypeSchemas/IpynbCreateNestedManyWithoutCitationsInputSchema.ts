import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutCitationsInputSchema } from '../IpynbCreateWithoutCitationsInputSchema.js';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from '../IpynbUncheckedCreateWithoutCitationsInputSchema.js';
import { IpynbCreateOrConnectWithoutCitationsInputSchema } from '../IpynbCreateOrConnectWithoutCitationsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
export const IpynbCreateNestedManyWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbCreateNestedManyWithoutCitationsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbCreateWithoutCitationsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default IpynbCreateNestedManyWithoutCitationsInputSchema;