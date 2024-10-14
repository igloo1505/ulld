import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutBibEntriesInputSchema } from './SubjectUpdateWithoutBibEntriesInputSchema';
import { SubjectUncheckedUpdateWithoutBibEntriesInputSchema } from './SubjectUncheckedUpdateWithoutBibEntriesInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema;
