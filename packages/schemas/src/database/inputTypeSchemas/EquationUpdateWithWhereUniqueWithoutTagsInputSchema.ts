import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutTagsInputSchema } from './EquationUpdateWithoutTagsInputSchema';
import { EquationUncheckedUpdateWithoutTagsInputSchema } from './EquationUncheckedUpdateWithoutTagsInputSchema';

export const EquationUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default EquationUpdateWithWhereUniqueWithoutTagsInputSchema;
