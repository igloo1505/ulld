import { z } from 'zod';
export declare const TaskCategorySchema: z.ZodEnum<["bug", "feature", "documentation", "online", "priority", "urgent", "work", "gym", "freetime", "study", "research", "paper"]>;
export type TaskCategoryType = `${z.infer<typeof TaskCategorySchema>}`;
export default TaskCategorySchema;
//# sourceMappingURL=TaskCategorySchema.d.ts.map