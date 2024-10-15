import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutTagsInputSchema } from './IpynbCreateWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from './IpynbUncheckedCreateWithoutTagsInputSchema.js';
import { IpynbCreateOrConnectWithoutTagsInputSchema } from './IpynbCreateOrConnectWithoutTagsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
export const IpynbUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbCreateWithoutTagsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default IpynbUncheckedCreateNestedManyWithoutTagsInputSchema;