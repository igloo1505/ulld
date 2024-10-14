import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema;
