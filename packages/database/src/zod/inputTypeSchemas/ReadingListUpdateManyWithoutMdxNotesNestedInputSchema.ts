import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutMdxNotesInputSchema } from './ReadingListCreateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from './ReadingListUncheckedCreateWithoutMdxNotesInputSchema';
import { ReadingListCreateOrConnectWithoutMdxNotesInputSchema } from './ReadingListCreateOrConnectWithoutMdxNotesInputSchema';
import { ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema } from './ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';

export const ReadingListUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReadingListScalarWhereInputSchema),z.lazy(() => ReadingListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReadingListUpdateManyWithoutMdxNotesNestedInputSchema;
