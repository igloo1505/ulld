import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutMdxNotesInputSchema } from './EquationUpdateWithoutMdxNotesInputSchema';
import { EquationUncheckedUpdateWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateWithoutMdxNotesInputSchema';

export const EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
