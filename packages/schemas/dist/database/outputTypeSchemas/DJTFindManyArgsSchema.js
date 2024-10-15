import { z } from 'zod';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js';
import { DJTOrderByWithRelationInputSchema } from '../inputTypeSchemas/DJTOrderByWithRelationInputSchema.js';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema.js';
import { DJTScalarFieldEnumSchema } from '../inputTypeSchemas/DJTScalarFieldEnumSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export const DJTFindManyArgsSchema = z.object({
    select: DJTSelectSchema.optional(),
    where: DJTWhereInputSchema.optional(),
    orderBy: z.union([DJTOrderByWithRelationInputSchema.array(), DJTOrderByWithRelationInputSchema]).optional(),
    cursor: DJTWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([DJTScalarFieldEnumSchema, DJTScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default DJTFindManyArgsSchema;
