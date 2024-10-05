import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutTopicsInputSchema } from './MdxNoteUpdateWithoutTopicsInputSchema';
import { MdxNoteUncheckedUpdateWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateWithoutTopicsInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema;
