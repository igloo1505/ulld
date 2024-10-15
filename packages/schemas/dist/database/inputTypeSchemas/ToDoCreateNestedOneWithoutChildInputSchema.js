import { z } from 'zod';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema.js';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema.js';
import { ToDoCreateOrConnectWithoutChildInputSchema } from './ToDoCreateOrConnectWithoutChildInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoCreateNestedOneWithoutChildInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutChildInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ToDoCreateOrConnectWithoutChildInputSchema).optional(),
    connect: z.lazy(() => ToDoWhereUniqueInputSchema).optional()
}).strict();
export default ToDoCreateNestedOneWithoutChildInputSchema;
