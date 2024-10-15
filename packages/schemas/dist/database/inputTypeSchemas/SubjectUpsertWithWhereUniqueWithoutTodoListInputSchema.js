import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutTodoListInputSchema } from './SubjectUpdateWithoutTodoListInputSchema.js';
import { SubjectUncheckedUpdateWithoutTodoListInputSchema } from './SubjectUncheckedUpdateWithoutTodoListInputSchema.js';
import { SubjectCreateWithoutTodoListInputSchema } from './SubjectCreateWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from './SubjectUncheckedCreateWithoutTodoListInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    update: z.union([z.lazy(() => SubjectUpdateWithoutTodoListInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutTodoListInputSchema)]),
    create: z.union([z.lazy(() => SubjectCreateWithoutTodoListInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema)]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema;
