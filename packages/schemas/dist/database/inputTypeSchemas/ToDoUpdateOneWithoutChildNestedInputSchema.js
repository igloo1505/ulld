import { z } from 'zod';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema.js';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema.js';
import { ToDoCreateOrConnectWithoutChildInputSchema } from './ToDoCreateOrConnectWithoutChildInputSchema.js';
import { ToDoUpsertWithoutChildInputSchema } from './ToDoUpsertWithoutChildInputSchema.js';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateToOneWithWhereWithoutChildInputSchema } from './ToDoUpdateToOneWithWhereWithoutChildInputSchema.js';
import { ToDoUpdateWithoutChildInputSchema } from './ToDoUpdateWithoutChildInputSchema.js';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from './ToDoUncheckedUpdateWithoutChildInputSchema.js';
export const ToDoUpdateOneWithoutChildNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutChildInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ToDoCreateOrConnectWithoutChildInputSchema).optional(),
    upsert: z.lazy(() => ToDoUpsertWithoutChildInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => ToDoWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => ToDoWhereInputSchema)]).optional(),
    connect: z.lazy(() => ToDoWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => ToDoUpdateToOneWithWhereWithoutChildInputSchema), z.lazy(() => ToDoUpdateWithoutChildInputSchema), z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema)]).optional(),
}).strict();
export default ToDoUpdateOneWithoutChildNestedInputSchema;
