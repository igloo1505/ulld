import { z } from 'zod';
declare const taskListIdSchema: z.ZodObject<{
    label: z.ZodString;
    id: z.ZodNumber;
    active: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: number;
    active: boolean;
}, {
    label: string;
    id: number;
    active?: boolean | undefined;
}>;
export type TaskListIds = z.output<typeof taskListIdSchema>;
export {};
//# sourceMappingURL=todos.d.ts.map