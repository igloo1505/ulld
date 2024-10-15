import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema.js';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema.js';
export const EquationCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default EquationCreateOrConnectWithoutTagsInputSchema;