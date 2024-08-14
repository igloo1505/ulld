import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutEquationsInputSchema } from './TagUncheckedUpdateManyWithoutEquationsInputSchema';

export const TagUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutEquationsInputSchema;
