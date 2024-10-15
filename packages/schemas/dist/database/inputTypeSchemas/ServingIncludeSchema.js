import { z } from 'zod';
import { DietaryItemArgsSchema } from "../outputTypeSchemas/DietaryItemArgsSchema";
export const ServingIncludeSchema = z.object({
    item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional(),
}).strict();
export default ServingIncludeSchema;
