import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutCitationsInputSchema } from '../MdxNoteCreateWithoutCitationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from '../MdxNoteUncheckedCreateWithoutCitationsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutCitationsInputSchema } from '../MdxNoteCreateOrConnectWithoutCitationsInputSchema.js';
import { MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema } from '../MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema } from '../MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema.js';
import { MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema } from '../MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema.js';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
export const MdxNoteUncheckedUpdateManyWithoutCitationsNestedInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateManyWithoutCitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteUncheckedUpdateManyWithoutCitationsNestedInputSchema;