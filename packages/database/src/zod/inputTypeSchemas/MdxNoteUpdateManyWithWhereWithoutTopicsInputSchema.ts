import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;
