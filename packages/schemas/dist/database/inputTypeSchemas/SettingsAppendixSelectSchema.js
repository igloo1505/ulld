import { z } from 'zod';
export const SettingsAppendixSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
export default SettingsAppendixSelectSchema;
