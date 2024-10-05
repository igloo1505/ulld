import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;
