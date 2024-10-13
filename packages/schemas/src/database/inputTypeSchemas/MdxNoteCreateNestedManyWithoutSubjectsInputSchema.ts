import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutSubjectsInputSchema } from '../MdxNoteCreateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from '../MdxNoteUncheckedCreateWithoutSubjectsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutSubjectsInputSchema } from '../MdxNoteCreateOrConnectWithoutSubjectsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutSubjectsInputSchema;