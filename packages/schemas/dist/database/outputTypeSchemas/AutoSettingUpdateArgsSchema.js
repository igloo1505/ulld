import { z } from 'zod';
import { AutoSettingUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUpdateInputSchema.js';
import { AutoSettingUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema.js';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    glob: z.boolean().optional(),
    value: z.boolean().optional(),
}).strict();
export const AutoSettingUpdateArgsSchema = z.object({
    select: AutoSettingSelectSchema.optional(),
    data: z.union([AutoSettingUpdateInputSchema, AutoSettingUncheckedUpdateInputSchema]),
    where: AutoSettingWhereUniqueInputSchema,
}).strict();
export default AutoSettingUpdateArgsSchema;
