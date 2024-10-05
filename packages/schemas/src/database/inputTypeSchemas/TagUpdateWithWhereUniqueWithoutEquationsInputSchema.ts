import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutEquationsInputSchema } from './TagUpdateWithoutEquationsInputSchema';
import { TagUncheckedUpdateWithoutEquationsInputSchema } from './TagUncheckedUpdateWithoutEquationsInputSchema';

export const TagUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutEquationsInputSchema;
