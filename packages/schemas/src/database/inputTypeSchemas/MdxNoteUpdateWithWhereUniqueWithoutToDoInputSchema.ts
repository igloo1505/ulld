import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutToDoInputSchema } from './MdxNoteUpdateWithoutToDoInputSchema';
import { MdxNoteUncheckedUpdateWithoutToDoInputSchema } from './MdxNoteUncheckedUpdateWithoutToDoInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema;
