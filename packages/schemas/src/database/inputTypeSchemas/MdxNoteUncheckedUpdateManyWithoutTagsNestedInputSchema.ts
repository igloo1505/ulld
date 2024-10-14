import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema';
import { MdxNoteCreateOrConnectWithoutTagsInputSchema } from './MdxNoteCreateOrConnectWithoutTagsInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutTagsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutTagsInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateWithoutTagsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema;
