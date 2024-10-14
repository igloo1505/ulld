import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutTagsInputSchema } from './MdxNoteUpdateWithoutTagsInputSchema';
import { MdxNoteUncheckedUpdateWithoutTagsInputSchema } from './MdxNoteUncheckedUpdateWithoutTagsInputSchema';

export const MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema;
