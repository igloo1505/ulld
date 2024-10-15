import { z } from 'zod';
import { BibEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibEntryUncheckedUpdateManyInputSchema.js';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js';
export const BibEntryUpdateManyArgsSchema = z.object({
    data: z.union([BibEntryUpdateManyMutationInputSchema, BibEntryUncheckedUpdateManyInputSchema]),
    where: BibEntryWhereInputSchema.optional(),
}).strict();
export default BibEntryUpdateManyArgsSchema;
