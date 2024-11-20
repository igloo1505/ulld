import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema';

export const MdxNoteCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutTopicsInputSchema;
