import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingScalarWhereInputSchema } from './ServingScalarWhereInputSchema';
import { ServingUpdateManyMutationInputSchema } from './ServingUpdateManyMutationInputSchema';
import { ServingUncheckedUpdateManyWithoutItemInputSchema } from './ServingUncheckedUpdateManyWithoutItemInputSchema';

export const ServingUpdateManyWithWhereWithoutItemInputSchema: z.ZodType<Prisma.ServingUpdateManyWithWhereWithoutItemInput> = z.object({
  where: z.lazy(() => ServingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServingUpdateManyMutationInputSchema),z.lazy(() => ServingUncheckedUpdateManyWithoutItemInputSchema) ]),
}).strict();

export default ServingUpdateManyWithWhereWithoutItemInputSchema;
