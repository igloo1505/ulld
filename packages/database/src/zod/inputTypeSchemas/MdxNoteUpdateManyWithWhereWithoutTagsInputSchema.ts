import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutTagsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTagsInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;
