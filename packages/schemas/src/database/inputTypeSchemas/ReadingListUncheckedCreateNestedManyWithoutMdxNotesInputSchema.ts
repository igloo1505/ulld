import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListCreateWithoutMdxNotesInputSchema } from '../ReadingListCreateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from '../ReadingListUncheckedCreateWithoutMdxNotesInputSchema.js';
import { ReadingListCreateOrConnectWithoutMdxNotesInputSchema } from '../ReadingListCreateOrConnectWithoutMdxNotesInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from '../ReadingListWhereUniqueInputSchema.js';
export const ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ReadingListUncheckedCreateNestedManyWithoutMdxNotesInputSchema;