import { z } from 'zod';
import { DJTUpdateInputSchema } from '../inputTypeSchemas/DJTUpdateInputSchema.js';
import { DJTUncheckedUpdateInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateInputSchema.js';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const DJTUpdateArgsSchema = z.object({
    select: DJTSelectSchema.optional(),
    data: z.union([DJTUpdateInputSchema, DJTUncheckedUpdateInputSchema]),
    where: DJTWhereUniqueInputSchema,
}).strict();
export default DJTUpdateArgsSchema;
