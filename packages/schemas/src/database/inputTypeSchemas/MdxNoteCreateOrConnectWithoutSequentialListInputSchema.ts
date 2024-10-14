import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutSequentialListInputSchema } from './MdxNoteCreateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateWithoutSequentialListInputSchema';

export const MdxNoteCreateOrConnectWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutSequentialListInputSchema;
