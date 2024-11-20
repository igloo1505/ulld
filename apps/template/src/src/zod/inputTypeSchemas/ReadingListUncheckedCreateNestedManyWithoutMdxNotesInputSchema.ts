import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutMdxNotesInputSchema } from './ReadingListCreateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from './ReadingListUncheckedCreateWithoutMdxNotesInputSchema';
import { ReadingListCreateOrConnectWithoutMdxNotesInputSchema } from './ReadingListCreateOrConnectWithoutMdxNotesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';

export const ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema;
