import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutEquationsInputSchema } from './MdxNoteUpdateWithoutEquationsInputSchema';
import { MdxNoteUncheckedUpdateWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateWithoutEquationsInputSchema';
import { MdxNoteCreateWithoutEquationsInputSchema } from './MdxNoteCreateWithoutEquationsInputSchema';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateWithoutEquationsInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutEquationsInputSchema;
