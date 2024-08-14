import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutTagsInputSchema } from './IpynbCreateWithoutTagsInputSchema';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from './IpynbUncheckedCreateWithoutTagsInputSchema';
import { IpynbCreateOrConnectWithoutTagsInputSchema } from './IpynbCreateOrConnectWithoutTagsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';

export const IpynbCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.IpynbCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbCreateWithoutTagsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IpynbCreateNestedManyWithoutTagsInputSchema;
