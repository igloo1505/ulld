import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema';
import { EquationCreateOrConnectWithoutMdxNotesInputSchema } from './EquationCreateOrConnectWithoutMdxNotesInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';

export const EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedCreateNestedManyWithoutMdxNotesInputSchema;
