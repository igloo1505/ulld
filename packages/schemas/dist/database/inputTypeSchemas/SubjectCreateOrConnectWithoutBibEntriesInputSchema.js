import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema.js';
export const SubjectCreateOrConnectWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema)]),
}).strict();
export default SubjectCreateOrConnectWithoutBibEntriesInputSchema;
