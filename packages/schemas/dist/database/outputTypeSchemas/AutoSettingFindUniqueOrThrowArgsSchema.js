import { z } from 'zod';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    glob: z.boolean().optional(),
    value: z.boolean().optional(),
}).strict();
export const AutoSettingFindUniqueOrThrowArgsSchema = z.object({
    select: AutoSettingSelectSchema.optional(),
    where: AutoSettingWhereUniqueInputSchema,
}).strict();
export default AutoSettingFindUniqueOrThrowArgsSchema;
