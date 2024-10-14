import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutTagsInputSchema } from './EquationUpdateWithoutTagsInputSchema';
import { EquationUncheckedUpdateWithoutTagsInputSchema } from './EquationUncheckedUpdateWithoutTagsInputSchema';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema';

export const EquationUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default EquationUpsertWithWhereUniqueWithoutTagsInputSchema;
