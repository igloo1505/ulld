import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema';

export const MdxNoteCreateOrConnectWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutReadingListInputSchema;
