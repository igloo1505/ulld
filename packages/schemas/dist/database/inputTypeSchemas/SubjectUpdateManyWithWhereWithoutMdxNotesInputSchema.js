import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => SubjectScalarWhereInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema)]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema;
