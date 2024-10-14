import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutEquationsInputSchema } from './TagCreateWithoutEquationsInputSchema';
import { TagUncheckedCreateWithoutEquationsInputSchema } from './TagUncheckedCreateWithoutEquationsInputSchema';

export const TagCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutEquationsInputSchema;
