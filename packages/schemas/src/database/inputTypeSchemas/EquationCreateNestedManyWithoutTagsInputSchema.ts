import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema';
import { EquationCreateOrConnectWithoutTagsInputSchema } from './EquationCreateOrConnectWithoutTagsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';

export const EquationCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationCreateWithoutTagsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EquationCreateNestedManyWithoutTagsInputSchema;
