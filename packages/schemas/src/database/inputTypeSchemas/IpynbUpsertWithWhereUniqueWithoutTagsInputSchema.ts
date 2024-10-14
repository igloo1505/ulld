import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithoutTagsInputSchema } from './IpynbUpdateWithoutTagsInputSchema';
import { IpynbUncheckedUpdateWithoutTagsInputSchema } from './IpynbUncheckedUpdateWithoutTagsInputSchema';
import { IpynbCreateWithoutTagsInputSchema } from './IpynbCreateWithoutTagsInputSchema';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from './IpynbUncheckedCreateWithoutTagsInputSchema';

export const IpynbUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default IpynbUpsertWithWhereUniqueWithoutTagsInputSchema;
