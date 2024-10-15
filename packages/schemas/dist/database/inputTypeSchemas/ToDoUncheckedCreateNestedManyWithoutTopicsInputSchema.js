import { z } from 'zod';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema.js';
import { ToDoCreateOrConnectWithoutTopicsInputSchema } from './ToDoCreateOrConnectWithoutTopicsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutTopicsInputSchema), z.lazy(() => ToDoCreateWithoutTopicsInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema;
