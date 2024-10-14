import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutTopicsInputSchema } from './MdxNoteUpdateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateWithoutTopicsInputSchema.js';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema;