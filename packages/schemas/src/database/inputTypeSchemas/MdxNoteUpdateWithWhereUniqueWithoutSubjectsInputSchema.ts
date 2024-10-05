import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutSubjectsInputSchema } from './MdxNoteUpdateWithoutSubjectsInputSchema';
import { MdxNoteUncheckedUpdateWithoutSubjectsInputSchema } from './MdxNoteUncheckedUpdateWithoutSubjectsInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema;
