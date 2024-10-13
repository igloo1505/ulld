import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietScalarWhereInputSchema } from '../DietScalarWhereInputSchema.js';
import { DietUpdateManyMutationInputSchema } from '../DietUpdateManyMutationInputSchema.js';
import { DietUncheckedUpdateManyWithoutItemsInputSchema } from '../DietUncheckedUpdateManyWithoutItemsInputSchema.js';
export const DietUpdateManyWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.DietUpdateManyWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => DietScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DietUpdateManyMutationInputSchema),z.lazy(() => DietUncheckedUpdateManyWithoutItemsInputSchema) ]),
}).strict();
export default DietUpdateManyWithWhereWithoutItemsInputSchema;