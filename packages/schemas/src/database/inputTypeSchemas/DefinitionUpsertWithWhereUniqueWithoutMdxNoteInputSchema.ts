import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema.js';
import { DefinitionUpdateWithoutMdxNoteInputSchema } from './DefinitionUpdateWithoutMdxNoteInputSchema.js';
import { DefinitionUncheckedUpdateWithoutMdxNoteInputSchema } from './DefinitionUncheckedUpdateWithoutMdxNoteInputSchema.js';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema.js';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema.js';
export const DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema) ]),
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema) ]),
}).strict();
export default DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema;