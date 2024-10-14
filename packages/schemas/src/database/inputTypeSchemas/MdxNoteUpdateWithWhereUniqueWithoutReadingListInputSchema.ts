import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutReadingListInputSchema } from './MdxNoteUpdateWithoutReadingListInputSchema';
import { MdxNoteUncheckedUpdateWithoutReadingListInputSchema } from './MdxNoteUncheckedUpdateWithoutReadingListInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema;
