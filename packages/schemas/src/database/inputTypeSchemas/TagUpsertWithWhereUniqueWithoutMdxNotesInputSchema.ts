import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutMdxNotesInputSchema } from './TagUpdateWithoutMdxNotesInputSchema';
import { TagUncheckedUpdateWithoutMdxNotesInputSchema } from './TagUncheckedUpdateWithoutMdxNotesInputSchema';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema';

export const TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
