import { z } from 'zod';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema.js';
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema.js';
import { BibCreateInputSchema } from '../inputTypeSchemas/BibCreateInputSchema.js';
import { BibUncheckedCreateInputSchema } from '../inputTypeSchemas/BibUncheckedCreateInputSchema.js';
import { BibUpdateInputSchema } from '../inputTypeSchemas/BibUpdateInputSchema.js';
import { BibUncheckedUpdateInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateInputSchema.js';
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
export const BibUpsertArgsSchema = z.object({
    select: BibSelectSchema.optional(),
    include: BibIncludeSchema.optional(),
    where: BibWhereUniqueInputSchema,
    create: z.union([BibCreateInputSchema, BibUncheckedCreateInputSchema]),
    update: z.union([BibUpdateInputSchema, BibUncheckedUpdateInputSchema]),
}).strict();
export default BibUpsertArgsSchema;
