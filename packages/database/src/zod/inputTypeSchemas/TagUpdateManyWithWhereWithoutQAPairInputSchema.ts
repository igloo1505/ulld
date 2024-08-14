import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutQAPairInputSchema } from './TagUncheckedUpdateManyWithoutQAPairInputSchema';

export const TagUpdateManyWithWhereWithoutQAPairInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutQAPairInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutQAPairInputSchema;
