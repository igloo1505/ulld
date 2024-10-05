import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutCitationsInputSchema } from './MdxNoteUpdateWithoutCitationsInputSchema';
import { MdxNoteUncheckedUpdateWithoutCitationsInputSchema } from './MdxNoteUncheckedUpdateWithoutCitationsInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutCitationsInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema;
