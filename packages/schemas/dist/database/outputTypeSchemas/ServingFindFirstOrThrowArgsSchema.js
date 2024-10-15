import { z } from 'zod';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js';
import { ServingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServingOrderByWithRelationInputSchema.js';
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema.js';
import { ServingScalarFieldEnumSchema } from '../inputTypeSchemas/ServingScalarFieldEnumSchema.js';
import { DietaryItemArgsSchema } from "../outputTypeSchemas/DietaryItemArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ServingSelectSchema = z.object({
    id: z.boolean().optional(),
    dietaryItemId: z.boolean().optional(),
    quant_oz: z.boolean().optional(),
    quant_guess: z.boolean().optional(),
    item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional(),
}).strict();
export const ServingFindFirstOrThrowArgsSchema = z.object({
    select: ServingSelectSchema.optional(),
    include: ServingIncludeSchema.optional(),
    where: ServingWhereInputSchema.optional(),
    orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
    cursor: ServingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ServingScalarFieldEnumSchema, ServingScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default ServingFindFirstOrThrowArgsSchema;
