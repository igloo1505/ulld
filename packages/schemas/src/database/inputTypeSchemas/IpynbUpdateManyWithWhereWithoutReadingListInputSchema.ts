import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutReadingListInputSchema } from './IpynbUncheckedUpdateManyWithoutReadingListInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutReadingListInputSchema;