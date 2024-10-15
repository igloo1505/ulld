import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema.js';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from './MdxNoteCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema.js';
export const MdxNoteUpsertWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithoutDefinitionsInput> = z.object({
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]),
  where: z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();
export default MdxNoteUpsertWithoutDefinitionsInputSchema;