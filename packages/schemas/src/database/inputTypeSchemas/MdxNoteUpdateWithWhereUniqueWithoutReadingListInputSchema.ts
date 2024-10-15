import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutReadingListInputSchema } from './MdxNoteUpdateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutReadingListInputSchema } from './MdxNoteUncheckedUpdateWithoutReadingListInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema;