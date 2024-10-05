import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema';
import { EquationCreateOrConnectWithoutRelatedValuesInputSchema } from './EquationCreateOrConnectWithoutRelatedValuesInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';

export const EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUncheckedCreateNestedManyWithoutRelatedValuesInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema;
