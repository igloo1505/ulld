import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutEquationsInputSchema } from './MdxNoteUpdateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateWithoutEquationsInputSchema.js';
import { MdxNoteCreateWithoutEquationsInputSchema } from './MdxNoteCreateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateWithoutEquationsInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema;