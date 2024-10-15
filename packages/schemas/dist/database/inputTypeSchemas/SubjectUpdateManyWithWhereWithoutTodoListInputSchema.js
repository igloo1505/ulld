import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutTodoListInputSchema } from './SubjectUncheckedUpdateManyWithoutTodoListInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => SubjectScalarWhereInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutTodoListInputSchema)]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutTodoListInputSchema;
