import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutSequentialListInputSchema } from '../MdxNoteUpdateWithoutSequentialListInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutSequentialListInputSchema } from '../MdxNoteUncheckedUpdateWithoutSequentialListInputSchema.js';
import { MdxNoteCreateWithoutSequentialListInputSchema } from '../MdxNoteCreateWithoutSequentialListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from '../MdxNoteUncheckedCreateWithoutSequentialListInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSequentialListInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema;