import { z } from 'zod';
import { DJTCreateInputSchema } from '../inputTypeSchemas/DJTCreateInputSchema.js';
import { DJTUncheckedCreateInputSchema } from '../inputTypeSchemas/DJTUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const DJTCreateArgsSchema = z.object({
    select: DJTSelectSchema.optional(),
    data: z.union([DJTCreateInputSchema, DJTUncheckedCreateInputSchema]),
}).strict();
export default DJTCreateArgsSchema;
