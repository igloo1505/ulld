import { z } from 'zod';
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema";
import { BibCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibCountOutputTypeArgsSchema";
export const BibSelectSchema = z.object({
    id: z.boolean().optional(),
    filename: z.boolean().optional(),
    firstSync: z.boolean().optional(),
    lastSync: z.boolean().optional(),
    entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default BibSelectSchema;
