import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutTopicsInputSchema } from './MdxNoteUpdateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateWithoutTopicsInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema;