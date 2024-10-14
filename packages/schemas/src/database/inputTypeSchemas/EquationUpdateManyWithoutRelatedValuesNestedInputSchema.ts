import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema';
import { EquationCreateOrConnectWithoutRelatedValuesInputSchema } from './EquationCreateOrConnectWithoutRelatedValuesInputSchema';
import { EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema } from './EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema } from './EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema';
import { EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema } from './EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';

export const EquationUpdateManyWithoutRelatedValuesNestedInputSchema: z.ZodType<Prisma.EquationUpdateManyWithoutRelatedValuesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema),z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema),z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema),z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema),z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EquationUpdateManyWithoutRelatedValuesNestedInputSchema;
