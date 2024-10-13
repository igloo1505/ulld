import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutBibEntriesInputSchema } from '../TagCreateWithoutBibEntriesInputSchema.js';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from '../TagUncheckedCreateWithoutBibEntriesInputSchema.js';
import { TagCreateOrConnectWithoutBibEntriesInputSchema } from '../TagCreateOrConnectWithoutBibEntriesInputSchema.js';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
export const TagCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutBibEntriesInputSchema),z.lazy(() => TagCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TagCreateNestedManyWithoutBibEntriesInputSchema;