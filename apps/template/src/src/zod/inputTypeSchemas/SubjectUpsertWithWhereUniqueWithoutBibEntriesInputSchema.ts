import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutBibEntriesInputSchema } from './SubjectUpdateWithoutBibEntriesInputSchema';
import { SubjectUncheckedUpdateWithoutBibEntriesInputSchema } from './SubjectUncheckedUpdateWithoutBibEntriesInputSchema';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema;
