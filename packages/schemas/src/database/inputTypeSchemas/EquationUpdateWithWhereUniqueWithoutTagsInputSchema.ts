import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutTagsInputSchema } from './EquationUpdateWithoutTagsInputSchema.js';
import { EquationUncheckedUpdateWithoutTagsInputSchema } from './EquationUncheckedUpdateWithoutTagsInputSchema.js';
export const EquationUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default EquationUpdateWithWhereUniqueWithoutTagsInputSchema;