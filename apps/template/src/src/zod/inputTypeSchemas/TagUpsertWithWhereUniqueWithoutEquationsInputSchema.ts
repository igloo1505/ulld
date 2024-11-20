import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutEquationsInputSchema } from './TagUpdateWithoutEquationsInputSchema';
import { TagUncheckedUpdateWithoutEquationsInputSchema } from './TagUncheckedUpdateWithoutEquationsInputSchema';
import { TagCreateWithoutEquationsInputSchema } from './TagCreateWithoutEquationsInputSchema';
import { TagUncheckedCreateWithoutEquationsInputSchema } from './TagUncheckedCreateWithoutEquationsInputSchema';

export const TagUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutEquationsInputSchema;
