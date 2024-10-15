import { z } from 'zod';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema.js';
import { DJTCreateInputSchema } from '../inputTypeSchemas/DJTCreateInputSchema.js';
import { DJTUncheckedCreateInputSchema } from '../inputTypeSchemas/DJTUncheckedCreateInputSchema.js';
import { DJTUpdateInputSchema } from '../inputTypeSchemas/DJTUpdateInputSchema.js';
import { DJTUncheckedUpdateInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const DJTUpsertArgsSchema = z.object({
    select: DJTSelectSchema.optional(),
    where: DJTWhereUniqueInputSchema,
    create: z.union([DJTCreateInputSchema, DJTUncheckedCreateInputSchema]),
    update: z.union([DJTUpdateInputSchema, DJTUncheckedUpdateInputSchema]),
}).strict();
export default DJTUpsertArgsSchema;
