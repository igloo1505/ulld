import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutRelatedValuesInputSchema } from './EquationUpdateWithoutRelatedValuesInputSchema';
import { EquationUncheckedUpdateWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateWithoutRelatedValuesInputSchema';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema';

export const EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema) ]),
}).strict();

export default EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema;
