import { z } from 'zod';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js';
import { ServingUpdateInputSchema } from '../inputTypeSchemas/ServingUpdateInputSchema.js';
import { ServingUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServingUncheckedUpdateInputSchema.js';
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema.js';
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
export const ServingUpdateArgsSchema = z.object({
    select: ServingSelectSchema.optional(),
    include: ServingIncludeSchema.optional(),
    data: z.union([ServingUpdateInputSchema, ServingUncheckedUpdateInputSchema]),
    where: ServingWhereUniqueInputSchema,
}).strict();
export default ServingUpdateArgsSchema;
