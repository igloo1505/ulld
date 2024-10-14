import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema';

export const DefinitionCreateOrConnectWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionCreateOrConnectWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema) ]),
}).strict();

export default DefinitionCreateOrConnectWithoutMdxNoteInputSchema;
