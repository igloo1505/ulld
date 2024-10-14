import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema';
import { DefinitionUpdateWithoutMdxNoteInputSchema } from './DefinitionUpdateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedUpdateWithoutMdxNoteInputSchema } from './DefinitionUncheckedUpdateWithoutMdxNoteInputSchema';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema';

export const DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema) ]),
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema) ]),
}).strict();

export default DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema;
