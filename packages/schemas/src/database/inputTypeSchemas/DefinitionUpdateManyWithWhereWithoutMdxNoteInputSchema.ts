import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionScalarWhereInputSchema } from './DefinitionScalarWhereInputSchema';
import { DefinitionUpdateManyMutationInputSchema } from './DefinitionUpdateManyMutationInputSchema';
import { DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema } from './DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema';

export const DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUpdateManyWithWhereWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DefinitionUpdateManyMutationInputSchema),z.lazy(() => DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema) ]),
}).strict();

export default DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema;
