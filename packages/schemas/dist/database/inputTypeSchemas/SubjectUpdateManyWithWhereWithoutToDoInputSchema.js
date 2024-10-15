import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutToDoInputSchema } from './SubjectUncheckedUpdateManyWithoutToDoInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutToDoInputSchema = z.object({
    where: z.lazy(() => SubjectScalarWhereInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoInputSchema)]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutToDoInputSchema;
