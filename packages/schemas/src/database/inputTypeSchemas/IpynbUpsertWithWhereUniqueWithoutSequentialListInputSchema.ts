import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutSequentialListInputSchema } from '../IpynbUpdateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedUpdateWithoutSequentialListInputSchema } from '../IpynbUncheckedUpdateWithoutSequentialListInputSchema.js';
import { IpynbCreateWithoutSequentialListInputSchema } from '../IpynbCreateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from '../IpynbUncheckedCreateWithoutSequentialListInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUpsertWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IpynbUpdateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutSequentialListInputSchema) ]),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema;