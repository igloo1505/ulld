import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutToDoInputSchema } from '../MdxNoteCreateWithoutToDoInputSchema.js';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from '../MdxNoteUncheckedCreateWithoutToDoInputSchema.js';
export const MdxNoteCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default MdxNoteCreateOrConnectWithoutToDoInputSchema;