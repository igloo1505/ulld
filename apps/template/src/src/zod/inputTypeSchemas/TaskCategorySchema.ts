import { z } from 'zod';

export const TaskCategorySchema = z.enum(['bug','feature','documentation','online','priority','urgent','work','gym','freetime','study','research','paper']);

export type TaskCategoryType = `${z.infer<typeof TaskCategorySchema>}`

export default TaskCategorySchema;
