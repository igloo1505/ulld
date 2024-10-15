import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutIpynbNotesInputSchema } from './SubjectUpdateWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedUpdateWithoutIpynbNotesInputSchema } from './SubjectUncheckedUpdateWithoutIpynbNotesInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateWithoutIpynbNotesInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutIpynbNotesInputSchema)]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
