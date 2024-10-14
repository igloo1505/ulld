import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutEquationsInputSchema } from './MdxNoteCreateWithoutEquationsInputSchema';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateWithoutEquationsInputSchema';

export const MdxNoteCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutEquationsInputSchema;
