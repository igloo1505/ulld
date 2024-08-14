import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemScalarWhereInputSchema } from './DietaryItemScalarWhereInputSchema';
import { DietaryItemUpdateManyMutationInputSchema } from './DietaryItemUpdateManyMutationInputSchema';
import { DietaryItemUncheckedUpdateManyWithoutDietInputSchema } from './DietaryItemUncheckedUpdateManyWithoutDietInputSchema';

export const DietaryItemUpdateManyWithWhereWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpdateManyWithWhereWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DietaryItemUpdateManyMutationInputSchema),z.lazy(() => DietaryItemUncheckedUpdateManyWithoutDietInputSchema) ]),
}).strict();

export default DietaryItemUpdateManyWithWhereWithoutDietInputSchema;
