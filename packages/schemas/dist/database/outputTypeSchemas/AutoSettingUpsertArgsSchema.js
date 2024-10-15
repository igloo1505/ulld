import { z } from 'zod';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js';
import { AutoSettingCreateInputSchema } from '../inputTypeSchemas/AutoSettingCreateInputSchema.js';
import { AutoSettingUncheckedCreateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.js';
import { AutoSettingUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUpdateInputSchema.js';
import { AutoSettingUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    glob: z.boolean().optional(),
    value: z.boolean().optional(),
}).strict();
export const AutoSettingUpsertArgsSchema = z.object({
    select: AutoSettingSelectSchema.optional(),
    where: AutoSettingWhereUniqueInputSchema,
    create: z.union([AutoSettingCreateInputSchema, AutoSettingUncheckedCreateInputSchema]),
    update: z.union([AutoSettingUpdateInputSchema, AutoSettingUncheckedUpdateInputSchema]),
}).strict();
export default AutoSettingUpsertArgsSchema;
