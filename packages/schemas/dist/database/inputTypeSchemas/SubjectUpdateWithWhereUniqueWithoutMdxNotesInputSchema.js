import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutMdxNotesInputSchema } from './SubjectUpdateWithoutMdxNotesInputSchema.js';
import { SubjectUncheckedUpdateWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateWithoutMdxNotesInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutMdxNotesInputSchema)]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
