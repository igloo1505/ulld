import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutCitationsInputSchema } from './MdxNoteUpdateWithoutCitationsInputSchema';
import { MdxNoteUncheckedUpdateWithoutCitationsInputSchema } from './MdxNoteUncheckedUpdateWithoutCitationsInputSchema';
import { MdxNoteCreateWithoutCitationsInputSchema } from './MdxNoteCreateWithoutCitationsInputSchema';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from './MdxNoteUncheckedCreateWithoutCitationsInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutCitationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutCitationsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema;
