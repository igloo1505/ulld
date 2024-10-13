import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from '../ReadingListCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from '../ReadingListUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListCreateOrConnectWithoutIpynbNotesInputSchema } from '../ReadingListCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from '../ReadingListWhereUniqueInputSchema.js';
export const ReadingListCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ReadingListCreateNestedManyWithoutIpynbNotesInputSchema;