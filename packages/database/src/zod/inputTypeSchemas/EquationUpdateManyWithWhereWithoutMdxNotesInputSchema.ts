import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema';
import { EquationUncheckedUpdateManyWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const EquationUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default EquationUpdateManyWithWhereWithoutMdxNotesInputSchema;
