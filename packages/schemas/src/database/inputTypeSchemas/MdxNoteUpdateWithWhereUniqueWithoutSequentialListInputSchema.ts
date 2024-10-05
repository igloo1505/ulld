import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutSequentialListInputSchema } from './MdxNoteUpdateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedUpdateWithoutSequentialListInputSchema } from './MdxNoteUncheckedUpdateWithoutSequentialListInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSequentialListInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema;
