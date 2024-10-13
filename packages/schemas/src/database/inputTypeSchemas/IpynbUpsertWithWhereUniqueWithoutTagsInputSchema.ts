import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutTagsInputSchema } from '../IpynbUpdateWithoutTagsInputSchema.js';
import { IpynbUncheckedUpdateWithoutTagsInputSchema } from '../IpynbUncheckedUpdateWithoutTagsInputSchema.js';
import { IpynbCreateWithoutTagsInputSchema } from '../IpynbCreateWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from '../IpynbUncheckedCreateWithoutTagsInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutTagsInputSchema;