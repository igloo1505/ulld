import { z } from 'zod';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema.js';
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.js';
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema";
import { CitationsGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/CitationsGroupCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const CitationsGroupSelectSchema = z.object({
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const CitationsGroupDeleteArgsSchema = z.object({
    select: CitationsGroupSelectSchema.optional(),
    include: CitationsGroupIncludeSchema.optional(),
    where: CitationsGroupWhereUniqueInputSchema,
}).strict();
export default CitationsGroupDeleteArgsSchema;
