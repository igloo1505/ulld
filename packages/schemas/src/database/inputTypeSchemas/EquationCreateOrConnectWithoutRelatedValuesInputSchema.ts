import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema.js';
export const EquationCreateOrConnectWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema) ]),
}).strict();
export default EquationCreateOrConnectWithoutRelatedValuesInputSchema;