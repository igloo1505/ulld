import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutSubjectsInputSchema;