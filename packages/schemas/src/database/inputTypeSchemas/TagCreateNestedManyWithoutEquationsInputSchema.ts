import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutEquationsInputSchema } from './TagCreateWithoutEquationsInputSchema';
import { TagUncheckedCreateWithoutEquationsInputSchema } from './TagUncheckedCreateWithoutEquationsInputSchema';
import { TagCreateOrConnectWithoutEquationsInputSchema } from './TagCreateOrConnectWithoutEquationsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagCreateWithoutEquationsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutEquationsInputSchema;
