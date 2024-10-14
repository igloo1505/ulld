import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema';
import { EquationCreateOrConnectWithoutTagsInputSchema } from './EquationCreateOrConnectWithoutTagsInputSchema';
import { EquationUpsertWithWhereUniqueWithoutTagsInputSchema } from './EquationUpsertWithWhereUniqueWithoutTagsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithWhereUniqueWithoutTagsInputSchema } from './EquationUpdateWithWhereUniqueWithoutTagsInputSchema';
import { EquationUpdateManyWithWhereWithoutTagsInputSchema } from './EquationUpdateManyWithWhereWithoutTagsInputSchema';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';

export const EquationUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationCreateWithoutTagsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EquationUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => EquationUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EquationUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => EquationUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EquationUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => EquationUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedUpdateManyWithoutTagsNestedInputSchema;
