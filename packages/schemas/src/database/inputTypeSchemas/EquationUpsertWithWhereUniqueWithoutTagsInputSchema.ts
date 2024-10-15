import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutTagsInputSchema } from './EquationUpdateWithoutTagsInputSchema.js';
import { EquationUncheckedUpdateWithoutTagsInputSchema } from './EquationUncheckedUpdateWithoutTagsInputSchema.js';
import { EquationCreateWithoutTagsInputSchema } from './EquationCreateWithoutTagsInputSchema.js';
import { EquationUncheckedCreateWithoutTagsInputSchema } from './EquationUncheckedCreateWithoutTagsInputSchema.js';
export const EquationUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutTagsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default EquationUpsertWithWhereUniqueWithoutTagsInputSchema;