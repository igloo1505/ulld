import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutBibEntriesInputSchema } from '../SubjectUpdateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedUpdateWithoutBibEntriesInputSchema } from '../SubjectUncheckedUpdateWithoutBibEntriesInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema;