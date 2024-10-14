import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutQAPairInputSchema } from './TagUpdateWithoutQAPairInputSchema';
import { TagUncheckedUpdateWithoutQAPairInputSchema } from './TagUncheckedUpdateWithoutQAPairInputSchema';

export const TagUpdateWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQAPairInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutQAPairInputSchema;
