import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutEquationsInputSchema } from '../TagCreateWithoutEquationsInputSchema.js';
import { TagUncheckedCreateWithoutEquationsInputSchema } from '../TagUncheckedCreateWithoutEquationsInputSchema.js';
import { TagCreateOrConnectWithoutEquationsInputSchema } from '../TagCreateOrConnectWithoutEquationsInputSchema.js';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
export const TagUncheckedCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagCreateWithoutEquationsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TagUncheckedCreateNestedManyWithoutEquationsInputSchema;