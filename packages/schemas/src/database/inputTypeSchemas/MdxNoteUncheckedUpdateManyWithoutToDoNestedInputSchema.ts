import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutToDoInputSchema } from './MdxNoteCreateWithoutToDoInputSchema';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from './MdxNoteUncheckedCreateWithoutToDoInputSchema';
import { MdxNoteCreateOrConnectWithoutToDoInputSchema } from './MdxNoteCreateOrConnectWithoutToDoInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutToDoInputSchema } from './MdxNoteUpdateManyWithWhereWithoutToDoInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateManyWithoutToDoNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateWithoutToDoInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutToDoInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutToDoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema;
