import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutSubjectsInputSchema } from './MdxNoteCreateWithoutSubjectsInputSchema';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateWithoutSubjectsInputSchema';
import { MdxNoteCreateOrConnectWithoutSubjectsInputSchema } from './MdxNoteCreateOrConnectWithoutSubjectsInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
