import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema';
import { ReadingListCreateOrConnectWithoutIpynbNotesInputSchema } from './ReadingListCreateOrConnectWithoutIpynbNotesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';

export const ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema;
