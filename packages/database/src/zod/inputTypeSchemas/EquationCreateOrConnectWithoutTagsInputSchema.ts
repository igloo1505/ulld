import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema';

export const EquationCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default EquationCreateOrConnectWithoutTagsInputSchema;
