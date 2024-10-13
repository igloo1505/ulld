import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutCitationsInputSchema } from '../MdxNoteCreateWithoutCitationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from '../MdxNoteUncheckedCreateWithoutCitationsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutCitationsInputSchema } from '../MdxNoteCreateOrConnectWithoutCitationsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutCitationsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutCitationsInputSchema;