import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from './MdxNoteCreateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedCreateWithoutDefinitionsInputSchema';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema';

export const MdxNoteUpsertWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithoutDefinitionsInput> = z.object({
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]),
  where: z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();

export default MdxNoteUpsertWithoutDefinitionsInputSchema;
