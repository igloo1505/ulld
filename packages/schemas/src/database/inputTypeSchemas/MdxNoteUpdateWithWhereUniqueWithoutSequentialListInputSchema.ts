import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutSequentialListInputSchema } from '../MdxNoteUpdateWithoutSequentialListInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutSequentialListInputSchema } from '../MdxNoteUncheckedUpdateWithoutSequentialListInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSequentialListInputSchema) ]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema;