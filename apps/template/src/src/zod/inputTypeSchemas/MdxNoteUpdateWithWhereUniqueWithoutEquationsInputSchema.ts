import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutEquationsInputSchema } from './MdxNoteUpdateWithoutEquationsInputSchema';
import { MdxNoteUncheckedUpdateWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateWithoutEquationsInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutEquationsInputSchema;
