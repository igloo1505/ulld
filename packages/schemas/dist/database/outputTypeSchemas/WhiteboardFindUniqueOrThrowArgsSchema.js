import { z } from 'zod';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const WhiteboardFindUniqueOrThrowArgsSchema = z.object({
    select: WhiteboardSelectSchema.optional(),
    where: WhiteboardWhereUniqueInputSchema,
}).strict();
export default WhiteboardFindUniqueOrThrowArgsSchema;
