import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema.js';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema.js';
import { EquationCreateOrConnectWithoutTagsInputSchema } from './EquationCreateOrConnectWithoutTagsInputSchema.js';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
export const EquationCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationCreateWithoutTagsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default EquationCreateNestedManyWithoutTagsInputSchema;