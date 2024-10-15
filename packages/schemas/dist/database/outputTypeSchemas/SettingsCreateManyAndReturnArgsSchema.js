import { z } from 'zod';
import { SettingsCreateManyInputSchema } from '../inputTypeSchemas/SettingsCreateManyInputSchema.js';
export const SettingsCreateManyAndReturnArgsSchema = z.object({
    data: z.union([SettingsCreateManyInputSchema, SettingsCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SettingsCreateManyAndReturnArgsSchema;
