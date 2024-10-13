import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutReadingListInputSchema } from '../MdxNoteUpdateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutReadingListInputSchema } from '../MdxNoteUncheckedUpdateWithoutReadingListInputSchema.js';
import { MdxNoteCreateWithoutReadingListInputSchema } from '../MdxNoteCreateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from '../MdxNoteUncheckedCreateWithoutReadingListInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutReadingListInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema;