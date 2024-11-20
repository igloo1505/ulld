import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './TagUncheckedUpdateManyWithoutIpynbNotesInputSchema';

export const TagUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutIpynbNotesInputSchema;
