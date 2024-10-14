import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutToDoInputSchema } from './MdxNoteUpdateWithoutToDoInputSchema';
import { MdxNoteUncheckedUpdateWithoutToDoInputSchema } from './MdxNoteUncheckedUpdateWithoutToDoInputSchema';
import { MdxNoteCreateWithoutToDoInputSchema } from './MdxNoteCreateWithoutToDoInputSchema';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from './MdxNoteUncheckedCreateWithoutToDoInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema;
