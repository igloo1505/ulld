import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema';
import { MdxNoteCreateOrConnectWithoutReadingListInputSchema } from './MdxNoteCreateOrConnectWithoutReadingListInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteCreateNestedManyWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutReadingListInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteCreateNestedManyWithoutReadingListInputSchema;
