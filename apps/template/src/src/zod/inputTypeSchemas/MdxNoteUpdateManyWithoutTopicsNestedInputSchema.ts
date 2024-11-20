import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema';
import { MdxNoteCreateOrConnectWithoutTopicsInputSchema } from './MdxNoteCreateOrConnectWithoutTopicsInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUpdateManyWithoutTopicsNestedInputSchema;
