import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutTagsInputSchema } from './IpynbUncheckedUpdateManyWithoutTagsInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => IpynbScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IpynbUpdateManyMutationInputSchema),z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutTagsInputSchema;