import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutToDoInputSchema } from '../MdxNoteCreateWithoutToDoInputSchema.js';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from '../MdxNoteUncheckedCreateWithoutToDoInputSchema.js';
import { MdxNoteCreateOrConnectWithoutToDoInputSchema } from '../MdxNoteCreateOrConnectWithoutToDoInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateWithoutToDoInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutToDoInputSchema;