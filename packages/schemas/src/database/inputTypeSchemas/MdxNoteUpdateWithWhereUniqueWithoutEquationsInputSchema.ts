import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutEquationsInputSchema } from './MdxNoteUpdateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateWithoutEquationsInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema;