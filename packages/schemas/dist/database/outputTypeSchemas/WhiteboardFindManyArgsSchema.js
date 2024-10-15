import { z } from 'zod';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js';
import { WhiteboardOrderByWithRelationInputSchema } from '../inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.js';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js';
import { WhiteboardScalarFieldEnumSchema } from '../inputTypeSchemas/WhiteboardScalarFieldEnumSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const WhiteboardFindManyArgsSchema = z.object({
    select: WhiteboardSelectSchema.optional(),
    where: WhiteboardWhereInputSchema.optional(),
    orderBy: z.union([WhiteboardOrderByWithRelationInputSchema.array(), WhiteboardOrderByWithRelationInputSchema]).optional(),
    cursor: WhiteboardWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([WhiteboardScalarFieldEnumSchema, WhiteboardScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default WhiteboardFindManyArgsSchema;
