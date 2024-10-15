import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema.js';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema.js';
export const MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema) ]),
}).strict();
export default MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema;