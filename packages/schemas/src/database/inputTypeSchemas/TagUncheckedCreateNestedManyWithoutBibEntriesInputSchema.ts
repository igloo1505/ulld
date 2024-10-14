import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema';
import { TagCreateOrConnectWithoutBibEntriesInputSchema } from './TagCreateOrConnectWithoutBibEntriesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutBibEntriesInputSchema),z.lazy(() => TagCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutBibEntriesInputSchema;
