import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutMdxNotesInputSchema } from './TagUpdateWithoutMdxNotesInputSchema';
import { TagUncheckedUpdateWithoutMdxNotesInputSchema } from './TagUncheckedUpdateWithoutMdxNotesInputSchema';

export const TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
