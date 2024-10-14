import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema';
import { TagCreateOrConnectWithoutQAPairInputSchema } from './TagCreateOrConnectWithoutQAPairInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutQAPairInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutQAPairInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutQAPairInputSchema),z.lazy(() => TagCreateWithoutQAPairInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema),z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutQAPairInputSchema;
