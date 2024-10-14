import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutMdxNotesInputSchema } from './EquationUpdateWithoutMdxNotesInputSchema';
import { EquationUncheckedUpdateWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateWithoutMdxNotesInputSchema';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema';

export const EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
