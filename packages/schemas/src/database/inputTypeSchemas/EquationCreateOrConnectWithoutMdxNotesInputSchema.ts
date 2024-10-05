import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema';

export const EquationCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default EquationCreateOrConnectWithoutMdxNotesInputSchema;
