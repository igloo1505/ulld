import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema.js';
import { MdxNoteCreateOrConnectWithoutReadingListInputSchema } from './MdxNoteCreateOrConnectWithoutReadingListInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutReadingListInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutReadingListInputSchema;