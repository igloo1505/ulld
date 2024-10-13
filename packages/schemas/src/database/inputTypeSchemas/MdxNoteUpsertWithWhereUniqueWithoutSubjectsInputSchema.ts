import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutSubjectsInputSchema } from '../MdxNoteUpdateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutSubjectsInputSchema } from '../MdxNoteUncheckedUpdateWithoutSubjectsInputSchema.js';
import { MdxNoteCreateWithoutSubjectsInputSchema } from '../MdxNoteCreateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from '../MdxNoteUncheckedCreateWithoutSubjectsInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema;