import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutSequentialListInputSchema } from './MdxNoteCreateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateWithoutSequentialListInputSchema';
import { MdxNoteCreateOrConnectWithoutSequentialListInputSchema } from './MdxNoteCreateOrConnectWithoutSequentialListInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema';
import { MdxNoteCreateManySequentialListInputEnvelopeSchema } from './MdxNoteCreateManySequentialListInputEnvelopeSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema } from './MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUpdateManyWithoutSequentialListNestedInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithoutSequentialListNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MdxNoteCreateManySequentialListInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSequentialListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUpdateManyWithoutSequentialListNestedInputSchema;
