import { z } from 'zod';
import { ToDoUpdateManyMutationInputSchema } from '../inputTypeSchemas/ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ToDoUncheckedUpdateManyInputSchema.js';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema.js';
export const ToDoUpdateManyArgsSchema = z.object({
    data: z.union([ToDoUpdateManyMutationInputSchema, ToDoUncheckedUpdateManyInputSchema]),
    where: ToDoWhereInputSchema.optional(),
}).strict();
export default ToDoUpdateManyArgsSchema;
