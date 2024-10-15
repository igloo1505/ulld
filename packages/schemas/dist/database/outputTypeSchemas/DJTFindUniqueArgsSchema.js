import { z } from 'zod';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const DJTFindUniqueArgsSchema = z.object({
    select: DJTSelectSchema.optional(),
    where: DJTWhereUniqueInputSchema,
}).strict();
export default DJTFindUniqueArgsSchema;
