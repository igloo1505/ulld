import { z } from 'zod';
import { AutoSettingUpdateManyMutationInputSchema } from '../inputTypeSchemas/AutoSettingUpdateManyMutationInputSchema.js';
import { AutoSettingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema.js';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema.js';
export const AutoSettingUpdateManyArgsSchema = z.object({
    data: z.union([AutoSettingUpdateManyMutationInputSchema, AutoSettingUncheckedUpdateManyInputSchema]),
    where: AutoSettingWhereInputSchema.optional(),
}).strict();
export default AutoSettingUpdateManyArgsSchema;
