import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutSubjectsInputSchema } from '../MdxNoteUpdateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutSubjectsInputSchema } from '../MdxNoteUncheckedUpdateWithoutSubjectsInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema;