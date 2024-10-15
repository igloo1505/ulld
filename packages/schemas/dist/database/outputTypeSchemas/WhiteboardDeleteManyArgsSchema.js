import { z } from 'zod';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js';
export const WhiteboardDeleteManyArgsSchema = z.object({
    where: WhiteboardWhereInputSchema.optional(),
}).strict();
export default WhiteboardDeleteManyArgsSchema;
