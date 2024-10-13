import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from '../DefinitionWhereUniqueInputSchema.js';
import { DefinitionUpdateWithoutMdxNoteInputSchema } from '../DefinitionUpdateWithoutMdxNoteInputSchema.js';
import { DefinitionUncheckedUpdateWithoutMdxNoteInputSchema } from '../DefinitionUncheckedUpdateWithoutMdxNoteInputSchema.js';
export const DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema) ]),
}).strict();
export default DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema;