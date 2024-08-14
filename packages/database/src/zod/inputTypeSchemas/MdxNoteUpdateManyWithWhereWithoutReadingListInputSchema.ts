import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema } from './MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema';

export const MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();

export default MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;
