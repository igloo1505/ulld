import { z } from 'zod';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js';
export const BibEntryDeleteManyArgsSchema = z.object({
    where: BibEntryWhereInputSchema.optional(),
}).strict();
export default BibEntryDeleteManyArgsSchema;
