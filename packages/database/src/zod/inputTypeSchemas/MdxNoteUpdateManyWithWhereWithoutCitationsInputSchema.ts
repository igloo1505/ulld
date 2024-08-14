import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutCitationsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;
