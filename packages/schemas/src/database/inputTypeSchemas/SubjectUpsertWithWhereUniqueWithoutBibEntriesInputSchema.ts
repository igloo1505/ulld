import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutBibEntriesInputSchema } from './SubjectUpdateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedUpdateWithoutBibEntriesInputSchema } from './SubjectUncheckedUpdateWithoutBibEntriesInputSchema.js';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema;