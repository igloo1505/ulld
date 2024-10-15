import { z } from 'zod';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema.js';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema.js';
import { TimePeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.js';
import { TimePeriodWhereUniqueInputSchema } from '../inputTypeSchemas/TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodScalarFieldEnumSchema } from '../inputTypeSchemas/TimePeriodScalarFieldEnumSchema.js';
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
export const TimePeriodFindFirstOrThrowArgsSchema = z.object({
    select: TimePeriodSelectSchema.optional(),
    include: TimePeriodIncludeSchema.optional(),
    where: TimePeriodWhereInputSchema.optional(),
    orderBy: z.union([TimePeriodOrderByWithRelationInputSchema.array(), TimePeriodOrderByWithRelationInputSchema]).optional(),
    cursor: TimePeriodWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([TimePeriodScalarFieldEnumSchema, TimePeriodScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default TimePeriodFindFirstOrThrowArgsSchema;
