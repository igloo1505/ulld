import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;
