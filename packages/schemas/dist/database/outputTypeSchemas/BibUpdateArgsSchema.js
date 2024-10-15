import { z } from 'zod';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema.js';
import { BibUpdateInputSchema } from '../inputTypeSchemas/BibUpdateInputSchema.js';
import { BibUncheckedUpdateInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateInputSchema.js';
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema.js';
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema";
import { BibCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const BibSelectSchema = z.object({
    id: z.boolean().optional(),
    filename: z.boolean().optional(),
    firstSync: z.boolean().optional(),
    lastSync: z.boolean().optional(),
    entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const BibUpdateArgsSchema = z.object({
    select: BibSelectSchema.optional(),
    include: BibIncludeSchema.optional(),
    data: z.union([BibUpdateInputSchema, BibUncheckedUpdateInputSchema]),
    where: BibWhereUniqueInputSchema,
}).strict();
export default BibUpdateArgsSchema;
