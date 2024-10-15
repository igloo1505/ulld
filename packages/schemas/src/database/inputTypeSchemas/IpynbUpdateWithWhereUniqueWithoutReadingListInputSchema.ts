import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutReadingListInputSchema } from './IpynbUpdateWithoutReadingListInputSchema.js';
import { IpynbUncheckedUpdateWithoutReadingListInputSchema } from './IpynbUncheckedUpdateWithoutReadingListInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema;