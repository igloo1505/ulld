import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutCitationsInputSchema } from './MdxNoteCreateWithoutCitationsInputSchema';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from './MdxNoteUncheckedCreateWithoutCitationsInputSchema';

export const MdxNoteCreateOrConnectWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutCitationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutCitationsInputSchema;
