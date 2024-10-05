import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietScalarWhereInputSchema } from './DietScalarWhereInputSchema';
import { DietUpdateManyMutationInputSchema } from './DietUpdateManyMutationInputSchema';
import { DietUncheckedUpdateManyWithoutItemsInputSchema } from './DietUncheckedUpdateManyWithoutItemsInputSchema';

export const DietUpdateManyWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.DietUpdateManyWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => DietScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DietUpdateManyMutationInputSchema),z.lazy(() => DietUncheckedUpdateManyWithoutItemsInputSchema) ]),
}).strict();

export default DietUpdateManyWithWhereWithoutItemsInputSchema;
