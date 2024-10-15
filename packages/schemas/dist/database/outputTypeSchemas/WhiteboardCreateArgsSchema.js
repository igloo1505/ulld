import { z } from 'zod';
import { WhiteboardCreateInputSchema } from '../inputTypeSchemas/WhiteboardCreateInputSchema.js';
import { WhiteboardUncheckedCreateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const WhiteboardCreateArgsSchema = z.object({
    select: WhiteboardSelectSchema.optional(),
    data: z.union([WhiteboardCreateInputSchema, WhiteboardUncheckedCreateInputSchema]),
}).strict();
export default WhiteboardCreateArgsSchema;
