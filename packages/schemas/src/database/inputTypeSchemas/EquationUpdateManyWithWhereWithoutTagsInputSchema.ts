import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema';
import { EquationUncheckedUpdateManyWithoutTagsInputSchema } from './EquationUncheckedUpdateManyWithoutTagsInputSchema';

export const EquationUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default EquationUpdateManyWithWhereWithoutTagsInputSchema;
