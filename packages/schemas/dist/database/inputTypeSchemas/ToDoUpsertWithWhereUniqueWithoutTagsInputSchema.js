import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutTagsInputSchema } from './ToDoUpdateWithoutTagsInputSchema.js';
import { ToDoUncheckedUpdateWithoutTagsInputSchema } from './ToDoUncheckedUpdateWithoutTagsInputSchema.js';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutTagsInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    update: z.union([z.lazy(() => ToDoUpdateWithoutTagsInputSchema), z.lazy(() => ToDoUncheckedUpdateWithoutTagsInputSchema)]),
    create: z.union([z.lazy(() => ToDoCreateWithoutTagsInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutTagsInputSchema;
