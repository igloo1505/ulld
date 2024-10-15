import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema.js';
import { EquationCreateOrConnectWithoutRelatedValuesInputSchema } from './EquationCreateOrConnectWithoutRelatedValuesInputSchema.js';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
export const EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUncheckedCreateNestedManyWithoutRelatedValuesInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema;