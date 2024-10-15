import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutTopicsInputSchema } from './IpynbUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutTopicsInputSchema;