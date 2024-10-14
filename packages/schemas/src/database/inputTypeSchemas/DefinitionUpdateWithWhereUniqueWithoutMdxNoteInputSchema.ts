import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema';
import { DefinitionUpdateWithoutMdxNoteInputSchema } from './DefinitionUpdateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedUpdateWithoutMdxNoteInputSchema } from './DefinitionUncheckedUpdateWithoutMdxNoteInputSchema';

export const DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema) ]),
}).strict();

export default DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema;
