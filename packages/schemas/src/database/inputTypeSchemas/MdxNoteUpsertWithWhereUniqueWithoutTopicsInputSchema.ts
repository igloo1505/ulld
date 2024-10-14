import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutTopicsInputSchema } from './MdxNoteUpdateWithoutTopicsInputSchema';
import { MdxNoteUncheckedUpdateWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateWithoutTopicsInputSchema';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema;
