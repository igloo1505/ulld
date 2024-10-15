import { z } from 'zod';
export const AutoSettingSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    glob: z.boolean().optional(),
    value: z.boolean().optional(),
}).strict();
export default AutoSettingSelectSchema;
