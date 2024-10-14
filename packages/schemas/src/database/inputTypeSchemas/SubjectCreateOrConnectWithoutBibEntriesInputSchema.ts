import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema';

export const SubjectCreateOrConnectWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutBibEntriesInputSchema;
