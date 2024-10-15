import { z } from 'zod';
import { AutoSettingCreateInputSchema } from '../inputTypeSchemas/AutoSettingCreateInputSchema.js';
import { AutoSettingUncheckedCreateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    glob: z.boolean().optional(),
    value: z.boolean().optional(),
}).strict();
export const AutoSettingCreateArgsSchema = z.object({
    select: AutoSettingSelectSchema.optional(),
    data: z.union([AutoSettingCreateInputSchema, AutoSettingUncheckedCreateInputSchema]),
}).strict();
export default AutoSettingCreateArgsSchema;
