import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutQAPairInputSchema } from './TagUpdateWithoutQAPairInputSchema';
import { TagUncheckedUpdateWithoutQAPairInputSchema } from './TagUncheckedUpdateWithoutQAPairInputSchema';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema';

export const TagUpsertWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQAPairInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutQAPairInputSchema;
