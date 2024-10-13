import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutEquationsInputSchema } from '../MdxNoteCreateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from '../MdxNoteUncheckedCreateWithoutEquationsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutEquationsInputSchema } from '../MdxNoteCreateOrConnectWithoutEquationsInputSchema.js';
import { MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema } from '../MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema } from '../MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema.js';
import { MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema } from '../MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema.js';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
export const MdxNoteUpdateManyWithoutEquationsNestedInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithoutEquationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteUpdateManyWithoutEquationsNestedInputSchema;