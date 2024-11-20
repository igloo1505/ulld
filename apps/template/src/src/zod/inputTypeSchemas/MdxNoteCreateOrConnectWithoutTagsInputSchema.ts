import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema';

export const MdxNoteCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default MdxNoteCreateOrConnectWithoutTagsInputSchema;
