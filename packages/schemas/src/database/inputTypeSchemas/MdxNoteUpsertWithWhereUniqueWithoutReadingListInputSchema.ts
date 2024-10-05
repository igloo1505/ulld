import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutReadingListInputSchema } from './MdxNoteUpdateWithoutReadingListInputSchema';
import { MdxNoteUncheckedUpdateWithoutReadingListInputSchema } from './MdxNoteUncheckedUpdateWithoutReadingListInputSchema';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutReadingListInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema;
