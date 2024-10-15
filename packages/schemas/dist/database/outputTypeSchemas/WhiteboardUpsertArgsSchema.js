import { z } from 'zod';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js';
import { WhiteboardCreateInputSchema } from '../inputTypeSchemas/WhiteboardCreateInputSchema.js';
import { WhiteboardUncheckedCreateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.js';
import { WhiteboardUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUpdateInputSchema.js';
import { WhiteboardUncheckedUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const WhiteboardUpsertArgsSchema = z.object({
    select: WhiteboardSelectSchema.optional(),
    where: WhiteboardWhereUniqueInputSchema,
    create: z.union([WhiteboardCreateInputSchema, WhiteboardUncheckedCreateInputSchema]),
    update: z.union([WhiteboardUpdateInputSchema, WhiteboardUncheckedUpdateInputSchema]),
}).strict();
export default WhiteboardUpsertArgsSchema;
