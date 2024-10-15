import { z } from 'zod';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema.js';
import { FeatureRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema.js';
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.js';
import { FeatureRequestScalarFieldEnumSchema } from '../inputTypeSchemas/FeatureRequestScalarFieldEnumSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const FeatureRequestSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    message: z.boolean().optional(),
    category: z.boolean().optional(),
    userBase: z.boolean().optional(),
    receivedOn: z.boolean().optional(),
}).strict();
export const FeatureRequestFindFirstOrThrowArgsSchema = z.object({
    select: FeatureRequestSelectSchema.optional(),
    where: FeatureRequestWhereInputSchema.optional(),
    orderBy: z.union([FeatureRequestOrderByWithRelationInputSchema.array(), FeatureRequestOrderByWithRelationInputSchema]).optional(),
    cursor: FeatureRequestWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FeatureRequestScalarFieldEnumSchema, FeatureRequestScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default FeatureRequestFindFirstOrThrowArgsSchema;
