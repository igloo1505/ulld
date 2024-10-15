import { z } from 'zod';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js';
import { ServingCreateInputSchema } from '../inputTypeSchemas/ServingCreateInputSchema.js';
import { ServingUncheckedCreateInputSchema } from '../inputTypeSchemas/ServingUncheckedCreateInputSchema.js';
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
export const ServingCreateArgsSchema = z.object({
    select: ServingSelectSchema.optional(),
    include: ServingIncludeSchema.optional(),
    data: z.union([ServingCreateInputSchema, ServingUncheckedCreateInputSchema]),
}).strict();
export default ServingCreateArgsSchema;
