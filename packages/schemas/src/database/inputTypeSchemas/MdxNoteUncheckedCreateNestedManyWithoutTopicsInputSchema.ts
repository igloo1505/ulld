import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutTopicsInputSchema } from '../MdxNoteCreateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from '../MdxNoteUncheckedCreateWithoutTopicsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutTopicsInputSchema } from '../MdxNoteCreateOrConnectWithoutTopicsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema;