import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema';

export const TagCreateOrConnectWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutBibEntriesInputSchema;
