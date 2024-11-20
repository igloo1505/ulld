import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutSubjectsInputSchema } from './MdxNoteUpdateWithoutSubjectsInputSchema';
import { MdxNoteUncheckedUpdateWithoutSubjectsInputSchema } from './MdxNoteUncheckedUpdateWithoutSubjectsInputSchema';
import { MdxNoteCreateWithoutSubjectsInputSchema } from './MdxNoteCreateWithoutSubjectsInputSchema';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateWithoutSubjectsInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema;
