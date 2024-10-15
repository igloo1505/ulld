import { z } from 'zod';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema.js';
import { TimePeriodCreateInputSchema } from '../inputTypeSchemas/TimePeriodCreateInputSchema.js';
import { TimePeriodUncheckedCreateInputSchema } from '../inputTypeSchemas/TimePeriodUncheckedCreateInputSchema.js';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const TimePeriodSelectSchema = z.object({
    id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    dietId: z.boolean().optional(),
    Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional(),
}).strict();
export const TimePeriodCreateArgsSchema = z.object({
    select: TimePeriodSelectSchema.optional(),
    include: TimePeriodIncludeSchema.optional(),
    data: z.union([TimePeriodCreateInputSchema, TimePeriodUncheckedCreateInputSchema]).optional(),
}).strict();
export default TimePeriodCreateArgsSchema;
