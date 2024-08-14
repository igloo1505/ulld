import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema';
import { MdxNoteCreateOrConnectWithoutReadingListInputSchema } from './MdxNoteCreateOrConnectWithoutReadingListInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema } from './MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUpdateManyWithoutReadingListNestedInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithoutReadingListNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUpdateManyWithoutReadingListNestedInputSchema;
