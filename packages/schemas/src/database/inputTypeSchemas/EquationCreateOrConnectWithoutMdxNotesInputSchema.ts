import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from '../EquationWhereUniqueInputSchema.js';
import { EquationCreateWithoutMdxNotesInputSchema } from '../EquationCreateWithoutMdxNotesInputSchema.js';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from '../EquationUncheckedCreateWithoutMdxNotesInputSchema.js';
export const EquationCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default EquationCreateOrConnectWithoutMdxNotesInputSchema;