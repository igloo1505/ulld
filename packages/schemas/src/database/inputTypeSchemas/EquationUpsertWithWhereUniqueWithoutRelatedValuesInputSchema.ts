import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutRelatedValuesInputSchema } from './EquationUpdateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedUpdateWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateWithoutRelatedValuesInputSchema.js';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema.js';
export const EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema) ]),
}).strict();
export default EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema;