import { z } from 'zod';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema.js';
import { ReadingListWhereUniqueInputSchema } from '../inputTypeSchemas/ReadingListWhereUniqueInputSchema.js';
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema";
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema";
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema";
import { ReadingListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReadingListCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ReadingListSelectSchema = z.object({
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    lastUpdate: z.boolean().optional(),
    bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
    mdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
    ipynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ReadingListCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const ReadingListDeleteArgsSchema = z.object({
    select: ReadingListSelectSchema.optional(),
    include: ReadingListIncludeSchema.optional(),
    where: ReadingListWhereUniqueInputSchema,
}).strict();
export default ReadingListDeleteArgsSchema;
