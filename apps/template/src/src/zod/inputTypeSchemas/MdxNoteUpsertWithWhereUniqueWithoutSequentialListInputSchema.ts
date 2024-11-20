import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutSequentialListInputSchema } from './MdxNoteUpdateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedUpdateWithoutSequentialListInputSchema } from './MdxNoteUncheckedUpdateWithoutSequentialListInputSchema';
import { MdxNoteCreateWithoutSequentialListInputSchema } from './MdxNoteCreateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateWithoutSequentialListInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutSequentialListInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutSequentialListInputSchema;
