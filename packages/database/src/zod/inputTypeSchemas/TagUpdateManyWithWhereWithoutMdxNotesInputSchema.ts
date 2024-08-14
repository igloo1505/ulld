import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutMdxNotesInputSchema } from './TagUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const TagUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutMdxNotesInputSchema;
