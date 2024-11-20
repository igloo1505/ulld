import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema';

export const TagCreateOrConnectWithoutQAPairInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutQAPairInputSchema;
