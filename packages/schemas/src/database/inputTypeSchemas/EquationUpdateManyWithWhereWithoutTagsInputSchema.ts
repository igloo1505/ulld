import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationScalarWhereInputSchema } from '../EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from '../EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutTagsInputSchema } from '../EquationUncheckedUpdateManyWithoutTagsInputSchema.js';
export const EquationUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();
export default EquationUpdateManyWithWhereWithoutTagsInputSchema;